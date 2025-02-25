/* eslint-disable semi */
import IMetadataPosts from "./metadata-posts.interface";
import IRecordPosts from "./record-posts.interface";

export default interface IResponseJson {
  record: IRecordPosts;
  metadata: IMetadataPosts;
}
