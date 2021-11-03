export default function handler(req: { method: any; }, res: any) {
  res.status(200).json({method: req.method, message: "This is API handler!"})
}
