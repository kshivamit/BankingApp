using BankingApplication.DTOs.Customer;

namespace BankingApplication.Interfaces.Services
{
    public interface ICustomerService
    {
        Task<IEnumerable<CustomerResponseDto>> GetAllAsync();

        Task<CustomerResponseDto?> GetByIdAsync(int id);

        Task CreateAsync(CreateCustomerDto dto);

        Task UpdateAsync(int id, UpdateCustomerDto dto);

        Task DeleteAsync(int id);
    }
}