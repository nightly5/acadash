import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ parent }) => {
    const userData = await parent();
    if (! userData.signed_in)
        throw error(401, "Sign in to obtain access");
}) satisfies PageServerLoad;
