using Xunit;

namespace TDDKata.Test
{
    public class BlogTests
    {
        [Fact]
        public void TestToString()
        {
            // arrange
            var blog = Blog.Create().AddPost("thing 1").AddPost("thing 2");
            
            // act
            var actual = blog.ToString();
            
            // assert
            Assert.Equal("thing 1\n---\nthing 2\n---\n", actual);
        }
    }
}