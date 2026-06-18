using BankingDomain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BankingInfrastructure.Configurations
{
    public class BeneficiaryConfiguration : IEntityTypeConfiguration<Beneficiary>
    {
        public void Configure(EntityTypeBuilder<Beneficiary> builder)
        {
            builder.HasKey(x => x.BeneficiaryId);

            builder.Property(x => x.Name)
                   .IsRequired()
                   .HasMaxLength(200);

            builder.Property(x => x.AccountNumber)
                   .IsRequired()
                   .HasMaxLength(20);

            builder.Property(x => x.BankName)
                   .IsRequired()
                   .HasMaxLength(200);

            builder.Property(x => x.CreatedDate)
                   .HasDefaultValueSql("GETDATE()");

            builder.HasOne(x => x.Customer)
                   .WithMany(x => x.Beneficiaries)
                   .HasForeignKey(x => x.CustomerId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}