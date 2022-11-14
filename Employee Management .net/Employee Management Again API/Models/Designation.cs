using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Employee_Management_Again_API.Models
{
    public class Designation
    {
        [Key]
        public int Id { get; set; }
        public string DesignationName { get; set; }
        public string RoleName { get; set; }
        public string Department { get; set; }
    }
}
