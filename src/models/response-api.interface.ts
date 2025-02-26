/* eslint-disable semi */
import IMetadataPosts from "./metadata-posts.interface";
import IRecordPosts from "./record-posts.interface";

export default interface IResponseApi {
  record: IRecordPosts;
  metadata: IMetadataPosts;
}
