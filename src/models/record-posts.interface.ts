/* eslint-disable semi */
import IJobs from "@/models/jobs.interface";
import IPosts from "@/models/posts.interface";

export default interface IRecordPosts {
  posts: IPosts[];
  jobs: IJobs[];
}
