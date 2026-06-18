using BankingDomain.Common;

namespace BankingDomain.Entities
{
    public class User : BaseEntity
    {
        public int UserId { get; set; }
        public int CustomerId { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string Role { get; set; }
        public bool IsActive { get; set; }
    }
}
