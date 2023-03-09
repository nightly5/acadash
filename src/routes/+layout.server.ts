import type { LayoutServerLoad } from "./$types";

export const load = (({cookies}) => ({
        signed_in: Boolean(cookies.get('userData'))
    }
)) satisfies LayoutServerLoad;
