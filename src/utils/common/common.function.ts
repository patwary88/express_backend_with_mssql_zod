// src/utils/common/common.function.ts

/**
 * calculateAge
 * @param dob — date‐of‐birth as ISO string or Date
 * @returns age in years (integer)
 */
export function calculateAge(dob: string | Date): number {
    const birth = typeof dob === 'string' ? new Date(dob) : dob;
    const ageDiffMs = Date.now() - birth.getTime();
    return new Date(ageDiffMs).getUTCFullYear() - 1970;
  }
  