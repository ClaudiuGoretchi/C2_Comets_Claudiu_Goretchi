use anchor_lang::prelude::*;

declare_id!("62w3xNFLWav9DEEGLoYzvnggFWmpdJxJCzeNR4dKEM6T");

#[program]
pub mod anchor_test {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
