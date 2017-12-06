using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Examples;
using System.Net.Http;
using Microsoft.AspNetCore.Authorization;

namespace Template.Controllers
{
    [Produces("application/json")]
    public class BaseCommonController : Controller
    {
        public BaseCommonController()
        {

        }
    }
}
