export interface Env {
    test: string
}
declare namespace App {
    interface Platform {
        env: Env
    }
}
