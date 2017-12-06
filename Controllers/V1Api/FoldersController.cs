using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Examples;
using System.Net.Http;

namespace Template.V1Api.Controllers
{
  public class FoldersController : BaseV1Controller
  {
    // GET: api/Folders
    [HttpGet]
    public IEnumerable<string> Get()
    {
      //HttpResponseMessage message = new HttpResponseMessage();
      //message.Content = new StringContent("sdf");

      return new string[] { "value1", "value2" };
    }

    // GET: api/Folders/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
    }

    // POST: api/Folders
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT: api/Folders/5
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
