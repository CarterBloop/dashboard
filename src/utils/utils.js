import { ethers } from "ethers";

// Random addresses to use for nodeIDs
export const nodeID = (seed) => {
	return emptyWallet(seed).address;
};

export const emptyWallet = (seed) => {
	const pk = randomBytes(seed, 32);
	const w = new ethers.Wallet(pk);
	return w;
};

// NOT really random, only used for generating test data
export function randomBytes(seed, lower, upper) {
	if (!upper) {
		upper = lower;
	}

	if (upper === 0 && upper === lower) {
		return new Uint8Array(0);
	}

	let result = ethers.utils.arrayify(
		ethers.utils.keccak256(ethers.utils.toUtf8Bytes(seed))
	);
	while (result.length < upper) {
		result = ethers.utils.concat([result, ethers.utils.keccak256(result)]);
	}

	const top = ethers.utils.arrayify(ethers.utils.keccak256(result));
	const percent = ((top[0] << 16) | (top[1] << 8) | top[2]) / 0x01000000;

	return result.slice(0, lower + Math.floor((upper - lower) * percent));
}

export async function now() {
    const p = ethers.getDefaultProvider("http://localhost:8545");
    const latest = await p.getBlockNumber();
      const b = await p.getBlock(latest);
      return ethers.BigNumber.from(b.timestamp);
  }