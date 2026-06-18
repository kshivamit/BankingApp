using BankingDomain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BankingInfrastructure.Configurations;

public class AccountConfiguration : IEntityTypeConfiguration<Account>
{
    public void Configure(EntityTypeBuilder<Account> builder)
    {
        builder.HasKey(x => x.AccountId);

        builder.Property(x => x.AccountNumber)
               .IsRequired()
               .HasMaxLength(20);

        builder.HasIndex(x => x.AccountNumber)
               .IsUnique();

        builder.Property(x => x.Balance)
               .HasPrecision(18, 2);

        builder.HasOne(x => x.Customer)
               .WithMany(x => x.Accounts)
               .HasForeignKey(x => x.CustomerId);
    }
}