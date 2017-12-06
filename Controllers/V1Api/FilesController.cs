using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Examples;
using System.Net.Http;
using Microsoft.AspNetCore.Authorization;
using Template.Models;

namespace Template.V1Api.Controllers
{
    public class FilesController : BaseV1Controller
    {
        // GET: api/Files
        [HttpGet]
        public IEnumerable<File> Get()
        {
            //HttpResponseMessage message = new HttpResponseMessage();
            //message.Content = new StringContent("sdf");

            return new List<File> { new File() { Id = 1, Name = "File1" }, new File() { Id = 2, Name = "File2" } };
        }

        // GET: api/Files/5
        [HttpGet("{id}")]
        
        public string Get(int id)
        {
            return "value_" + id;
        }

        // POST: api/Files
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Files/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        //[SwaggerRequestExample(typeof(DeliveryOptionsSearchModel), typeof(DeliveryOptionsSearchModelExample))]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
