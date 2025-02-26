/* eslint-disable semi */
import IJobs from "./jobs.interface";
import IPosts from "./posts.interface";

export default interface IRecordPosts {
  posts: IPosts[];
  jobs: IJobs[];
}
