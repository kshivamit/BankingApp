using BankingDomain.Common;

namespace BankingDomain.Entities
{
    public class Beneficiary : BaseEntity
    {
        public int BeneficiaryId { get; set; }
        public int CustomerId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string AccountNumber { get; set; } = string.Empty;
        public string BankName { get; set; } = string.Empty;
        public Customer Customer { get; set; }
    }
}
