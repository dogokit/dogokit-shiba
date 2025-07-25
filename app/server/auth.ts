import { TRPCError, type TRPCRouterRecord } from "@trpc/server";
import { configPrismaCache } from "@/lib/config/prisma";
import { protectedProcedure } from "@/modules/trpc/trpc-config";

export const authRouter = {
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.user.id },
      ...configPrismaCache,
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });
    return user;
  }),

  getUserMinimal: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.user.id },
      select: {
        name: true,
        username: true,
        email: true,
      },
      ...configPrismaCache,
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });
    return user;
  }),

  getUserComplete: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.user.id },
      include: {
        accounts: true,
        passkeys: true,
        twofactors: true,
        sessions: true,
      },
      ...configPrismaCache,
    });
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });
    return user;
  }),
} satisfies TRPCRouterRecord;
