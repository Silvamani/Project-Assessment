using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Employee_Management_Again_API.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        [StringLength(10)]
        public string EmpId { get; set; }
        [StringLength(150)]
        public string EmpName { get; set; }
        [StringLength(11)]
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Designation { get; set; }
        public string SalaryGrade { get; set; }
    }
}
