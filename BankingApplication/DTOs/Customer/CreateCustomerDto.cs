namespace BankingApplication.DTOs.Customer
{
    public class CreateCustomerDto
    {
        public string FirstName { get; set; } = string.Empty;

        public string LastName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Phone { get; set; } = string.Empty;

        public DateOnly DateOfBirth { get; set; }

        public string Address { get; set; } = string.Empty;
    }
}