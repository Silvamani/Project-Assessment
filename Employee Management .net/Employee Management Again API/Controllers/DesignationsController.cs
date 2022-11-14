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
    public class DesignationsController : ControllerBase
    {
        private readonly EmployeeDBContext _context;

        public DesignationsController(EmployeeDBContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Designation>>> GetDesignations()
        {
            try
            {
                return await _context.Designations.ToListAsync();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Designation>> GetDesignation(int id)
        {
            try
            {
                var designation = await _context.Designations.FindAsync(id);

                if (designation == null)
                {
                    return NotFound();
                }

                return designation;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDesignation(int id, Designation designation)
        {
            if (id != designation.Id)
            {
                return BadRequest();
            }

            _context.Entry(designation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DesignationExists(id))
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
        public async Task<ActionResult<Designation>> PostDesignation(Designation designation)
        {
            try
            {
                _context.Designations.Add(designation);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetDesignation", new { id = designation.Id }, designation);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Designation>> DeleteDesignation(int id)
        {
            try
            {
                var designation = await _context.Designations.FindAsync(id);
                if (designation == null)
                {
                    return NotFound();
                }
                _context.Designations.Remove(designation);
                await _context.SaveChangesAsync();
                return designation;
            }
            catch (Exception ex) 
            { 
                throw ex;
            } 
        }

        private bool DesignationExists(int id)
        {
            return _context.Designations.Any(e => e.Id == id);
        }
    }
}
