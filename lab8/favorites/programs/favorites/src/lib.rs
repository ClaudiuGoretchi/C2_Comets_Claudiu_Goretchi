use anchor_lang::prelude::*;

declare_id!("EfEeLV7uwaP82erDgpQ5piEmqXoaRoHZsmhQikpUwBrR");

pub const ANCHOR_DISCRIMINATOR_SIZE usize = 8;

#[program]
pub mod favorites {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }

    pub fn set_favorites(ctx: Context<SetFavorites>, number: u64, color: String, hobbies: Vec<String>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct SetFavorites{
    #[account(mut)]
    pub user: Signer<'info>,

    #[account(init,
        payer = user,
        space = ANCHOR_DISCRIMINATOR_SIZE + Favorites::InitSpace
        )]
    }
// pub struct Initialize {}

#[account]
#[derive(InitSpace)]
pub struct Favorites {
    pub number: u64,

    #[max_len(50)]
    pub color: String,

    #[max_len(5, 50)]
    pub hobbies: Vec<String>
}
