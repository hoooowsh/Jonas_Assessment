using BusinessLayer.Model.Interfaces;
using System.Collections.Generic;
using AutoMapper;
using BusinessLayer.Model.Models;
using DataAccessLayer.Model.Interfaces;
using System.Threading.Tasks;
using DataAccessLayer.Model.Models;

namespace BusinessLayer.Services
{
    public class CompanyService : ICompanyService
    {
        private readonly ICompanyRepository _companyRepository;
        private readonly IMapper _mapper;

        public CompanyService(ICompanyRepository companyRepository, IMapper mapper)
        {
            _companyRepository = companyRepository;
            _mapper = mapper;
        }
        public async Task<IEnumerable<CompanyInfo>> GetAllCompanies()
        {
            var res = _companyRepository.GetAll();
            return _mapper.Map<IEnumerable<CompanyInfo>>(res);
        }

        public async Task<CompanyInfo> GetCompanyByCode(string companyCode)
        {
            var result = _companyRepository.GetByCode(companyCode);
            return _mapper.Map<CompanyInfo>(result); 
        }

        public async Task CreateCompany(string value)
        {
            var company = _mapper.Map<Company>(value);
            _companyRepository.SaveCompany(company);
        }

        public async Task UpdateCompany(int id, string value)
        {

        }

        public async Task DeleteCompany(int id)
        {

        }
    }
}
