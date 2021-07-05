using System.Collections.Immutable;

namespace TDDKata
{
    public class Blog
    {
        private readonly ImmutableList<string> _posts;
        
        private Blog()
        {
            this._posts = ImmutableList.Create<string>();
        }
        
        private Blog(ImmutableList<string> posts)
        {
            this._posts = posts;
        }

        public static Blog Create()
        {
            return new Blog();
        }

        public Blog AddPost(string post)
        {
            return new Blog(this._posts.Add(post));
        }

        public override string ToString()
        {
            var result = "";
            
            foreach(var post in this._posts)
            {
                result += $"{post}\n---\n";
            }

            return result;
        }
    }
}