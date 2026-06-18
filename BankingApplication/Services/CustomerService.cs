using BankingApplication.DTOs.Customer;
using BankingApplication.Interfaces.Repositories;
using BankingApplication.Interfaces.Services;
using BankingDomain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankingApplication.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _customerRepo;

        public CustomerService(ICustomerRepository customerRepository)
        {
            _customerRepo = customerRepository;
        }

        public async Task CreateAsync(CreateCustomerDto dto)
        {
            var existingCustomer = await _customerRepo.GetByEmailAsync(dto.Email);
            if (existingCustomer != null)
            {
                throw new InvalidOperationException("Customer with the same email already exists.");
            }

            var customer = new Customer
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Phone = dto.Phone,
                Email = dto.Email,
                DateOfBirth = dto.DateOfBirth,
                Address = dto.Address,
            };

            await _customerRepo.AddAsync(customer);
            await _customerRepo.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var customer = await _customerRepo.GetByIdAsync(id);
            if (customer == null)
            {
                throw new InvalidOperationException("Customer not found.");
            }

            _customerRepo.Delete(customer);
            await _customerRepo.SaveChangesAsync(); 
        }

        public async Task<IEnumerable<CustomerResponseDto>> GetAllAsync()
        {
            var customers = await _customerRepo.GetAllAsync();

            return customers.Select(c => new CustomerResponseDto
            {
                CustomerId = c.CustomerId,
                FullName = $"{c.FirstName} {c.LastName}",
                Email = c.Email,
                Phone = c.Phone
            }).ToList();
        }

        public async Task<CustomerResponseDto?> GetByIdAsync(int id)
        {
            var customer = await _customerRepo.GetByIdAsync(id);

            if (customer == null)
            {
                return null;
            }

            return new CustomerResponseDto
            {
                CustomerId = customer.CustomerId,
                FullName = $"{customer.FirstName} {customer.LastName}",
                Email = customer.Email,
                Phone = customer.Phone
            };
        }

        public async Task UpdateAsync(int id, UpdateCustomerDto dto)
        {
            var customer = await _customerRepo.GetByIdAsync(id);
            if (customer == null)
            {
                throw new InvalidOperationException("Customer not found.");
            }

            customer.FirstName = dto.FirstName;
            customer.LastName = dto.LastName;
            customer.Phone = dto.Phone;
            customer.Email = dto.Email;
            customer.Address = dto.Address;

            _customerRepo.Update(customer);
            await _customerRepo.SaveChangesAsync();
        }
    }
}
