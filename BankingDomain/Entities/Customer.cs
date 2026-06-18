using BankingDomain.Common;

namespace BankingDomain.Entities
{
    public class Customer : BaseEntity
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public DateOnly DateOfBirth { get; set; }
        public string Address { get; set; } = string.Empty;
        public ICollection<Account> Accounts { get; set; } = new List<Account>();

        public ICollection<Beneficiary> Beneficiaries { get; set; } = new List<Beneficiary>();
    }
}
