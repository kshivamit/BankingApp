using BankingDomain.Common;

namespace BankingDomain.Entities
{
    public class Transaction : BaseEntity
    {
        public int TransactionId { get; set; }
        public int AccountId { get; set; }
        public decimal Amount { get; set; }
        public string TransactionType { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public Account Account { get; set; }
    }
}
