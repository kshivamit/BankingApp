using BankingDomain.Common;

namespace BankingDomain.Entities
{
    public class Account : BaseEntity
    {
        public int AccountId { get; set; }
        public int CustomerId { get; set; }
        public string AccountNumber { get; set; } = string.Empty;
        public decimal Balance { get; set; }
        public string AccountType { get; set; } = string.Empty;
        public bool Status { get; set; }
        public Customer Customer { get; set; }
        public ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
    }
}
