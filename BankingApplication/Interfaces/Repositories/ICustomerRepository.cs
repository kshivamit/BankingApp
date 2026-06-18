using BankingDomain.Entities;

namespace BankingApplication.Interfaces.Repositories
{
    public interface ICustomerRepository
    {
        Task<IEnumerable<Customer>> GetAllAsync();

        Task<Customer?> GetByIdAsync(int customerId);

        Task<Customer?> GetByEmailAsync(string email);

        void Update(Customer customer);

        void Delete(Customer customer);

        Task AddAsync(Customer customer);

        Task SaveChangesAsync();
    }
}