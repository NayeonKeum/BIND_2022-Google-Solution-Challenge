import express, { Application, Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { UserInfoRouter } from './routers/UserInfoRouter';
import { StoryRouter } from './routers/StoryRouter';
import { LikeRouter } from './routers/LikeRouter';
import { FollowRouter } from './routers/FollowRouter';
import { CommentRouter } from './routers/CommentRouter';
import path from 'path';
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

class Server {
    private app: express.Application;

    constructor() {
        this.app = express(); //init the application
        this.config();
        this.routerConfig();
        // this.swagger();
    }

    private config() {
        // this.app.use(bodyParser.urlencoded({ extended: false }));
        // this.app.use(bodyParser.json());
        this.app.use(express.json())
        this.app.disable('x-powered-by')
    }

    public routerConfig() {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('hello')
        })

        this.app.use('/user', UserInfoRouter);
        this.app.use('/story', StoryRouter);
        this.app.use('/like', LikeRouter);
        this.app.use('/follow', FollowRouter);
        this.app.use('/comment', CommentRouter);

    }

    // private swaggerSpec = YAML.load(path.join(__dirname, '../build/swagger.yaml'))
    // private swagger() {
    //     this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(this.swaggerSpec))
    // }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;