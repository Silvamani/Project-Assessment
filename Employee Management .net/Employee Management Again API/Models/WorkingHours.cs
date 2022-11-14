using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Employee_Management_Again_API.Models
{
    public class WorkingHours
    {
        [Key]
        public int Id { get; set; }
        public string Designation { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string TotalTime { get; set; }
    }
}
