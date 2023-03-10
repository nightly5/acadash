import type { LayoutServerLoad } from "./$types";

interface CookieData {
    name: string;
    regno: string;
    swipwd: string;
}

export const load = (({cookies}) => {
    const dataStr = cookies.get('userData');
    return {
        signed_in: !!dataStr,
        userData: JSON.parse(dataStr ?? "{}") as CookieData
    };
}) satisfies LayoutServerLoad;
