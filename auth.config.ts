import Auth from "@auth/core";
import Discord from "@auth/core/providers/discord";

const scopes = ['identify'].join(' ')

export default ({
  providers: [
    Discord({
      clientId: import.meta.env.DISCORD_CLIENT_ID,
      clientSecret: import.meta.env.DISCORD_CLIENT_SECRET,
      authorization: {params: {scopes: scopes}}
    }),
  ],
})