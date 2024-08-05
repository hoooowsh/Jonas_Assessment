using System.Collections.Generic;
using BusinessLayer.Model.Models;
using System.Threading.Tasks;

namespace BusinessLayer.Model.Interfaces
{
    public interface ICompanyService
    {
        Task<IEnumerable<CompanyInfo>> GetAllCompanies();
        Task<CompanyInfo> GetCompanyByCode(string companyCode);
        Task CreateCompany(string value);
        Task UpdateCompany(int id, string value);
        Task DeleteCompany(int id);
    }
}
