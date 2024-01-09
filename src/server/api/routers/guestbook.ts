import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const guestbookRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
        try {
          return await ctx.prisma.post.findMany({
            orderBy: {
              createdAt: "desc",
            },
            include: {
                user: {
                    select: {
                        name:true
                    }
                }
            }
          });
        } catch (error) {
          console.log(error);
        }
  }),
  postMessage: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        message: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.post.create({
          data: {
            userId: input.userId,
            description: input.message,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});