import bs58 from "bs58";
import { Transaction, VersionedTransaction } from "@solana/web3.js";

/**
 * Extracts and encodes the signature from a Solana transaction.
 * @param tx - The Solana transaction (either Transaction or VersionedTransaction)
 * @returns The base58-encoded signature string
 * @throws Error if the transaction is not signed by the fee payer
 */
export function serializeAndEncode(
  tx: Transaction | VersionedTransaction
): string {
  let signature =  tx.serialize()
  return bs58.encode(signature);
}

/**
 * Creates a promise that resolves after a specified time.
 * @param durationMs - The duration to wait in milliseconds
 * @returns A promise that resolves after the specified duration
 */
export const delay = (durationMs: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, durationMs));