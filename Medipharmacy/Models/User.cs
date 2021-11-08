using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Medipharmacy.Models
{
    public class User
    {
        [Key]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        [Required]
        public bool Super { get; set; } 
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

        public virtual Profile Profile { get; set; }

        public User(int userId, bool super, string email, string password, Profile profile)
        {
            UserId = userId;
            Super = super;
            Email = email;
            Password = password;
            Profile = profile;
        }

        public User()
        {
        }
    }
}
