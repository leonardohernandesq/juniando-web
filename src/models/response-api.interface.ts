/* eslint-disable semi */
import IMetadataPosts from "@/models/metadata-posts.interface";
import IRecordPosts from "@/models/record-posts.interface";

export default interface IResponseApi {
  record: IRecordPosts;
  metadata: IMetadataPosts;
}
