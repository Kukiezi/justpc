// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req: Request, res: any) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
