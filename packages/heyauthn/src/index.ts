import { Identity } from "@cryptkeeperzk/semaphore-identity"
import { GenerateAuthenticationOptionsOpts, GenerateRegistrationOptionsOpts } from "@simplewebauthn/server"
import HeyAuthn from "./heyAuthn"

export {
    HeyAuthn,
    GenerateRegistrationOptionsOpts as RegistrationOptions,
    GenerateAuthenticationOptionsOpts as AuthenticationOptions,
    Identity
}
