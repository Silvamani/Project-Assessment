using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Employee_Management_Again_API.Data;
using Employee_Management_Again_API.Models;

namespace Employee_Management_Again_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkingHoursController : ControllerBase
    {
        private readonly EmployeeDBContext _context;

        public WorkingHoursController(EmployeeDBContext context)
        {
            _context = context;
        }

       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkingHours>>> GetWorkingHours()
        {
            try
            {
                return await _context.WorkingHours.ToListAsync();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<WorkingHours>> GetWorkingHours(int id)
        {
            try
            {
                var workingHours = await _context.WorkingHours.FindAsync(id);

                if (workingHours == null)
                {
                    return NotFound();
                }

                return workingHours;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkingHours(int id, WorkingHours workingHours)
        {
            if (id != workingHours.Id)
            {
                return BadRequest();
            }

            _context.Entry(workingHours).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkingHoursExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<WorkingHours>> PostWorkingHours(WorkingHours workingHours)
        {
            try
            {
                _context.WorkingHours.Add(workingHours);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetWorkingHours", new { id = workingHours.Id }, workingHours);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<WorkingHours>> DeleteWorkingHours(int id)
        {
            try
            {
                var workingHours = await _context.WorkingHours.FindAsync(id);
                if (workingHours == null)
                {
                    return NotFound();
                }
                _context.WorkingHours.Remove(workingHours);
                await _context.SaveChangesAsync();
                return workingHours;
            }
            catch (Exception ex)
            {
                throw ex;
            } 
        }

        private bool WorkingHoursExists(int id)
        {
            return _context.WorkingHours.Any(e => e.Id == id);
        }
    }
}
