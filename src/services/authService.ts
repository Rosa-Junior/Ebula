import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from "expo-crypto";
import { User } from "../types/user";

const USERS_KEY = "@app:users_v1";
const SESSION_KEY = "@app:session_v1";

async function hashPassword(password: string) {
  return await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);
}

export async function registerLocal(user: User, password: string) {
  if (!user.email || !password) throw new Error("Email e senha são obrigatórios");
  if (password.length < 6) throw new Error("Senha precisa ter ao menos 6 caracteres");
  const raw = await AsyncStorage.getItem(USERS_KEY);
  const users: Record<string, any> = raw ? JSON.parse(raw) : {};
  if (users[user.email]) throw new Error("Usuário já existe");
  const pwdHash = await hashPassword(password);
  users[user.email] = { ...user, passwordHash: pwdHash, createdAt: Date.now() };
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
}

export async function loginLocal(email: string, password: string) {
  const raw = await AsyncStorage.getItem(USERS_KEY);
  const users: Record<string, any> = raw ? JSON.parse(raw) : {};
  const u = users[email];
  if (!u) throw new Error("Usuário não encontrado");
  const pwdHash = await hashPassword(password);
  if (pwdHash !== u.passwordHash) throw new Error("Credenciais inválidas");
  // Create lightweight session
  const session = { email, name: u.name || "", loggedAt: Date.now() };
  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export async function logoutLocal() {
  await AsyncStorage.removeItem(SESSION_KEY);
}

export async function loadSession() {
  const raw = await AsyncStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}
