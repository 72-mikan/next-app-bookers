// type FormData = {
//   name: string,
//   title: string
// }

const onSubmitHandler = async(e) => {
  await fetch(`http://localhost:3001/api/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: e.target.name,
      title: e.target.title,
    }),
  })
}

export const BookForm = () => {
  return (
    <>
      <h1>投稿</h1>
      <form onSubmit={onSubmitHandler} className="" method="post" action="http://localhost:3001/api/books">
        <div>
          <input type="text" name="title" />
        </div>
        <div>
          <input type="text" name="body" />
        </div>
        <div>
          <input type="submit" value="投稿" />
        </div>
      </form>
    </>
  );
}