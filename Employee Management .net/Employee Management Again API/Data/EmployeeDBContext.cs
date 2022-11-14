using Employee_Management_Again_API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employee_Management_Again_API.Data
{
    public class EmployeeDBContext : DbContext
    {
        public EmployeeDBContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Designation> Designations { get; set; }
        public DbSet<RequestLeave> RequestLeaves { get; set; }
        public DbSet<PaymentRole> PaymentRoles { get; set; }
        public DbSet<WorkingHours> WorkingHours { get; set; }

    }
}
