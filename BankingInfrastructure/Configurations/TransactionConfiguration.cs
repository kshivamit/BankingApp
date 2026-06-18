using BankingDomain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BankingInfrastructure.Configurations;

public class TransactionConfiguration : IEntityTypeConfiguration<Transaction>
{
    public void Configure(EntityTypeBuilder<Transaction> builder)
    {
        builder.HasKey(x => x.TransactionId);

        builder.Property(x => x.Amount)
               .HasPrecision(18, 2);

        builder.HasOne(x => x.Account)
               .WithMany(x => x.Transactions)
               .HasForeignKey(x => x.AccountId);
    }
}