import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from "expo-crypto";
import { User } from "../types/User";
import { SessionUser } from "../types/SessionUser";

const USERS_KEY = "@app:users_v1";
const SESSION_KEY = "@app:session_v1";

async function hashPassword(senha: string) {
  return await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, senha);
}

export async function registerLocal(user: User, senha: string) {
  const raw = await AsyncStorage.getItem(USERS_KEY);
  const users = raw ? JSON.parse(raw) : {};
  if (users[user.email]) throw new Error("Usuário já existe");
  const pwdHash = await hashPassword(senha);
  users[user.email] = { ...user, pwdHash, createdAt: Date.now() };
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export async function loginLocal(email: string, senha: string) {
  const raw = await AsyncStorage.getItem(USERS_KEY);
  const users = raw ? JSON.parse(raw) : {};
  const user = users[email];
  if (!user) throw new Error("Credenciais inválidas");
  const pwdHash = await hashPassword(senha);
  if (pwdHash !== user.pwdHash) throw new Error("Credenciais inválidas");
  
  const session = { email: user.email, nome: user.nome, loggedAt: Date.now() };
  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export async function logoutLocal() {
  await AsyncStorage.removeItem(SESSION_KEY);
}

export async function loadSession(): Promise<SessionUser | null>  {
  const session  = await AsyncStorage.getItem(SESSION_KEY);
  return session  ? JSON.parse(session ) : null;
}
