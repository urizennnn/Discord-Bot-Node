import {Router,Request,Response} from 'express'

const router = Router()

router.get('/dashboard', (req: Request, res: Response) => {
  try {
    const base64String = req.query.user as string; 
    console.log(base64String)
    if (!base64String) {
      return res.status(400).send('Bad Request: Missing user parameter');
    }

    const decodedData = Buffer.from(base64String, 'base64').toString('utf-8');

    console.log(decodedData);

    res.send(decodedData).status(200);
  } catch (error) {
    console.error('Error decoding Base64 string:', error);
    res.status(500).send(error);
  }
});

export default router