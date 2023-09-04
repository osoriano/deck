/* eslint-disable @typescript-eslint/array-type */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  InstantTime: string;
  JSON: any;
}

export interface Md_Action {
  __typename?: 'MD_Action';
  id: Scalars['String'];
  actionId: Scalars['String'];
  type: Scalars['String'];
  status: Md_ActionStatus;
  startedAt?: Maybe<Scalars['InstantTime']>;
  completedAt?: Maybe<Scalars['InstantTime']>;
  link?: Maybe<Scalars['String']>;
  actionType: Md_ActionType;
}

export type Md_ActionStatus = 'NOT_EVALUATED' | 'PENDING' | 'PASS' | 'FAIL' | 'FORCE_PASS' | 'SKIPPED';

export type Md_ActionType = 'VERIFICATION' | 'POST_DEPLOY';

export interface Md_ActuationPlan {
  __typename?: 'MD_ActuationPlan';
  id: Scalars['ID'];
  status?: Maybe<Md_ActuationPlanStatus>;
  environmentPlans?: Maybe<Array<Md_EnvironmentPlan>>;
}

export type Md_ActuationPlanStatus = 'PENDING' | 'COMPLETED' | 'FAILED';

export interface Md_Application {
  __typename?: 'MD_Application';
  id: Scalars['String'];
  name: Scalars['String'];
  account: Scalars['String'];
  isPaused?: Maybe<Scalars['Boolean']>;
  pausedInfo?: Maybe<Md_PausedInfo>;
  environments: Array<Md_Environment>;
  notifications?: Maybe<Array<Md_Notification>>;
  gitIntegration?: Maybe<Md_GitIntegration>;
  config?: Maybe<Md_Config>;
  versionOnUnpinning?: Maybe<Md_ArtifactVersionInEnvironment>;
  versionOnRollback?: Maybe<Md_ArtifactVersionInEnvironment>;
  userPermissions?: Maybe<Md_UserPermissions>;
}

export interface Md_ApplicationVersionOnUnpinningArgs {
  reference: Scalars['String'];
  environment: Scalars['String'];
}

export interface Md_ApplicationVersionOnRollbackArgs {
  reference: Scalars['String'];
  environment: Scalars['String'];
}

export type Md_ApplicationResult = Md_Application | Md_Error;

export interface Md_Artifact {
  __typename?: 'MD_Artifact';
  id: Scalars['String'];
  environment: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  reference: Scalars['String'];
  versions?: Maybe<Array<Md_ArtifactVersionInEnvironment>>;
  pinnedVersion?: Maybe<Md_PinnedVersion>;
  resources?: Maybe<Array<Md_Resource>>;
}

export interface Md_ArtifactVersionsArgs {
  statuses?: Maybe<Array<Md_ArtifactStatusInEnvironment>>;
  versions?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
}

export interface Md_ArtifactSpec {
  __typename?: 'MD_ArtifactSpec';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  spec?: Maybe<Scalars['JSON']>;
  warning?: Maybe<Md_Warning_Type>;
}

export type Md_ArtifactStatusInEnvironment =
  | 'PENDING'
  | 'APPROVED'
  | 'DEPLOYING'
  | 'CURRENT'
  | 'PREVIOUS'
  | 'VETOED'
  | 'SKIPPED';

export interface Md_ArtifactVersionActionPayload {
  application: Scalars['String'];
  environment: Scalars['String'];
  reference: Scalars['String'];
  comment: Scalars['String'];
  version: Scalars['String'];
}

export interface Md_ArtifactVersionInEnvironment {
  __typename?: 'MD_ArtifactVersionInEnvironment';
  id: Scalars['String'];
  version: Scalars['String'];
  buildNumber?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['InstantTime']>;
  deployedAt?: Maybe<Scalars['InstantTime']>;
  replacedAt?: Maybe<Scalars['InstantTime']>;
  gitMetadata?: Maybe<Md_GitMetadata>;
  packageDiff?: Maybe<Md_PackageDiff>;
  environment?: Maybe<Scalars['String']>;
  reference: Scalars['String'];
  status?: Maybe<Md_ArtifactStatusInEnvironment>;
  lifecycleSteps?: Maybe<Array<Md_LifecycleStep>>;
  constraints?: Maybe<Array<Md_Constraint>>;
  verifications?: Maybe<Array<Md_Action>>;
  postDeploy?: Maybe<Array<Md_Action>>;
  veto?: Maybe<Md_VersionVeto>;
  isCurrent?: Maybe<Scalars['Boolean']>;
}

export interface Md_CommitInfo {
  __typename?: 'MD_CommitInfo';
  sha?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
}

export interface Md_ComparisonLinks {
  __typename?: 'MD_ComparisonLinks';
  toPreviousVersion?: Maybe<Scalars['String']>;
  toCurrentVersion?: Maybe<Scalars['String']>;
}

export interface Md_Config {
  __typename?: 'MD_Config';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['InstantTime']>;
  rawConfig?: Maybe<Scalars['String']>;
  processedConfig?: Maybe<Scalars['String']>;
  previewEnvironmentsConfigured?: Maybe<Scalars['Boolean']>;
  isMigrating?: Maybe<Scalars['Boolean']>;
}

export interface Md_Constraint {
  __typename?: 'MD_Constraint';
  type: Scalars['String'];
  status: Md_ConstraintStatus;
  startedAt?: Maybe<Scalars['InstantTime']>;
  judgedAt?: Maybe<Scalars['InstantTime']>;
  judgedBy?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  attributes?: Maybe<Scalars['JSON']>;
}

export interface Md_ConstraintSpec {
  __typename?: 'MD_ConstraintSpec';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  spec?: Maybe<Scalars['JSON']>;
}

export type Md_ConstraintStatus = 'BLOCKED' | 'PENDING' | 'PASS' | 'FAIL' | 'FORCE_PASS' | 'SKIPPED';

export interface Md_ConstraintStatusPayload {
  application: Scalars['String'];
  environment: Scalars['String'];
  type: Scalars['String'];
  version: Scalars['String'];
  reference: Scalars['String'];
  status: Md_ConstraintStatus;
}

export type Md_ConstraintType = 'VERIFICATIONS' | 'DEPENDS_ON' | 'MANUAL_JUDGMENT' | 'JENKINS';

export interface Md_DeliveryConfigValidationPayload {
  deliveryConfig: Scalars['JSON'];
}

export interface Md_DeployLocation {
  __typename?: 'MD_DeployLocation';
  account?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  sublocations?: Maybe<Array<Scalars['String']>>;
}

export interface Md_DeployResourceImmediatelyPayload {
  application: Scalars['ID'];
  taskId: Scalars['ID'];
  regions: Array<Scalars['String']>;
}

export interface Md_DeployTarget {
  __typename?: 'MD_DeployTarget';
  cloudProvider?: Maybe<Scalars['String']>;
  location?: Maybe<Md_DeployLocation>;
  status?: Maybe<Md_RolloutTargetStatus>;
}

export interface Md_DismissNotificationPayload {
  application: Scalars['String'];
  id: Scalars['String'];
}

export interface Md_Environment {
  __typename?: 'MD_Environment';
  id: Scalars['ID'];
  name: Scalars['String'];
  state: Md_EnvironmentState;
  isPreview?: Maybe<Scalars['Boolean']>;
  isDeleting?: Maybe<Scalars['Boolean']>;
  gitMetadata?: Maybe<Md_GitMetadata>;
  basedOn?: Maybe<Scalars['String']>;
}

export interface Md_EnvironmentPlan {
  __typename?: 'MD_EnvironmentPlan';
  id: Scalars['ID'];
  environment: Scalars['String'];
  resourcePlans?: Maybe<Array<Md_ResourcePlan>>;
}

export interface Md_EnvironmentState {
  __typename?: 'MD_EnvironmentState';
  id: Scalars['String'];
  resources?: Maybe<Array<Md_Resource>>;
  artifacts?: Maybe<Array<Md_Artifact>>;
}

export interface Md_Error {
  __typename?: 'MD_Error';
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
}

export type Md_EventLevel = 'SUCCESS' | 'INFO' | 'WARNING' | 'ERROR';

export interface Md_ExecutionSummary {
  __typename?: 'MD_ExecutionSummary';
  id: Scalars['ID'];
  status: Md_RolloutTargetStatus;
  currentStage?: Maybe<Md_StageDetail>;
  stages?: Maybe<Array<Md_StageDetail>>;
  deployTargets?: Maybe<Array<Md_DeployTarget>>;
  error?: Maybe<Scalars['String']>;
}

export interface Md_GitIntegration {
  __typename?: 'MD_GitIntegration';
  id: Scalars['String'];
  repository?: Maybe<Scalars['String']>;
  branch?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  manifestPath?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
}

export interface Md_GitMetadata {
  __typename?: 'MD_GitMetadata';
  commit?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  branch?: Maybe<Scalars['String']>;
  repoName?: Maybe<Scalars['String']>;
  pullRequest?: Maybe<Md_PullRequest>;
  commitInfo?: Maybe<Md_CommitInfo>;
  comparisonLinks?: Maybe<Md_ComparisonLinks>;
}

export interface Md_InitiateApplicationMigrationPayload {
  application: Scalars['String'];
  deliveryConfig?: Maybe<Scalars['JSON']>;
}

export interface Md_JsonSchema {
  __typename?: 'MD_JsonSchema';
  id: Scalars['String'];
  schema: Scalars['JSON'];
}

export type Md_LifecycleEventScope = 'PRE_DEPLOYMENT';

export type Md_LifecycleEventStatus = 'NOT_STARTED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'ABORTED' | 'UNKNOWN';

export type Md_LifecycleEventType = 'BAKE' | 'BUILD';

export interface Md_LifecycleStep {
  __typename?: 'MD_LifecycleStep';
  scope?: Maybe<Md_LifecycleEventScope>;
  type: Md_LifecycleEventType;
  id?: Maybe<Scalars['String']>;
  status: Md_LifecycleEventStatus;
  text?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['InstantTime']>;
  completedAt?: Maybe<Scalars['InstantTime']>;
  artifactVersion?: Maybe<Scalars['String']>;
}

export interface Md_Location {
  __typename?: 'MD_Location';
  account?: Maybe<Scalars['String']>;
  regions?: Maybe<Array<Scalars['String']>>;
}

export interface Md_MarkArtifactVersionAsGoodPayload {
  application: Scalars['String'];
  environment: Scalars['String'];
  reference: Scalars['String'];
  version: Scalars['String'];
}

export interface Md_Migration {
  __typename?: 'MD_Migration';
  id: Scalars['ID'];
  status?: Maybe<Md_MigrationStatus>;
  deliveryConfig?: Maybe<Scalars['JSON']>;
  /** @deprecated Field no longer supported */
  userGeneratedDeliveryConfig?: Maybe<Scalars['JSON']>;
  userGeneratedConfig?: Maybe<Md_UserGeneratedConfig>;
  prLink?: Maybe<Scalars['String']>;
  actuationPlan?: Maybe<Md_ActuationPlan>;
  warnings?: Maybe<Array<Md_Warning>>;
  pipelines?: Maybe<Array<Md_Pipeline>>;
}

export interface Md_MigrationReportIssuePayload {
  application: Scalars['ID'];
  issue: Scalars['String'];
}

export type Md_MigrationStatus = 'NOT_READY' | 'READY_TO_START' | 'PR_CREATED' | 'BLOCKED' | 'COMPLETED';

export interface Md_Moniker {
  __typename?: 'MD_Moniker';
  app?: Maybe<Scalars['String']>;
  stack?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
}

export interface Md_Notification {
  __typename?: 'MD_Notification';
  id: Scalars['String'];
  level: Md_EventLevel;
  message: Scalars['String'];
  triggeredAt?: Maybe<Scalars['InstantTime']>;
  triggeredBy?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  dismissedAt?: Maybe<Scalars['InstantTime']>;
  dismissedBy?: Maybe<Scalars['String']>;
}

export interface Md_PackageAndVersion {
  __typename?: 'MD_PackageAndVersion';
  packageName: Scalars['String'];
  version: Scalars['String'];
}

export interface Md_PackageAndVersionChange {
  __typename?: 'MD_PackageAndVersionChange';
  packageName: Scalars['String'];
  oldVersion: Scalars['String'];
  newVersion: Scalars['String'];
}

export interface Md_PackageDiff {
  __typename?: 'MD_PackageDiff';
  added?: Maybe<Array<Md_PackageAndVersion>>;
  removed?: Maybe<Array<Md_PackageAndVersion>>;
  changed?: Maybe<Array<Md_PackageAndVersionChange>>;
}

export interface Md_PausePayload {
  application: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  cancelTasks?: Maybe<Scalars['Boolean']>;
}

export interface Md_PausedInfo {
  __typename?: 'MD_PausedInfo';
  id: Scalars['String'];
  by?: Maybe<Scalars['String']>;
  at?: Maybe<Scalars['InstantTime']>;
  comment?: Maybe<Scalars['String']>;
}

export type Md_PinType = 'ROLLBACK' | 'LOCK';

export interface Md_PinnedVersion {
  __typename?: 'MD_PinnedVersion';
  id: Scalars['String'];
  name: Scalars['String'];
  reference: Scalars['String'];
  version: Scalars['String'];
  gitMetadata?: Maybe<Md_GitMetadata>;
  buildNumber?: Maybe<Scalars['String']>;
  pinnedAt?: Maybe<Scalars['InstantTime']>;
  pinnedBy?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  type?: Maybe<Md_PinType>;
}

export interface Md_Pipeline {
  __typename?: 'MD_Pipeline';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  shape?: Maybe<Scalars['String']>;
  status?: Maybe<Md_PipelineStatus>;
  deployablePipeline?: Maybe<Scalars['Boolean']>;
  reason?: Maybe<Scalars['String']>;
  resources?: Maybe<Array<Md_ResourceSpec>>;
  constraints?: Maybe<Array<Md_ConstraintSpec>>;
  artifacts?: Maybe<Array<Md_ArtifactSpec>>;
}

export type Md_PipelineStatus = 'PROCESSED' | 'EXPORTED' | 'NOT_SUPPORTED';

export interface Md_PullRequest {
  __typename?: 'MD_PullRequest';
  number?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
}

export interface Md_RecheckResourcePayload {
  application: Scalars['String'];
  resourceId: Scalars['String'];
}

export interface Md_RedeployResourcePayload {
  application: Scalars['ID'];
  resource: Scalars['ID'];
  environment: Scalars['String'];
}

export interface Md_Resource {
  __typename?: 'MD_Resource';
  id: Scalars['String'];
  kind: Scalars['String'];
  moniker?: Maybe<Md_Moniker>;
  state?: Maybe<Md_ResourceActuationState>;
  artifact?: Maybe<Md_Artifact>;
  displayName?: Maybe<Scalars['String']>;
  location?: Maybe<Md_Location>;
  rawDefinition?: Maybe<Scalars['String']>;
  isDeployable?: Maybe<Scalars['Boolean']>;
}

export type Md_ResourceAction = 'NONE' | 'CREATE' | 'UPDATE';

export interface Md_ResourceActuationState {
  __typename?: 'MD_ResourceActuationState';
  resourceId: Scalars['ID'];
  status: Md_ResourceActuationStatus;
  reason?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  tasks?: Maybe<Array<Md_ResourceTask>>;
  errors?: Maybe<Array<Scalars['String']>>;
  pausedInfo?: Maybe<Md_PausedInfo>;
}

export type Md_ResourceActuationStatus = 'PROCESSING' | 'UP_TO_DATE' | 'ERROR' | 'WAITING' | 'NOT_MANAGED' | 'DELETING';

export interface Md_ResourcePlan {
  __typename?: 'MD_ResourcePlan';
  id: Scalars['ID'];
  action: Md_ResourceAction;
  diff?: Maybe<Scalars['JSON']>;
}

export interface Md_ResourceSpec {
  __typename?: 'MD_ResourceSpec';
  id: Scalars['ID'];
  kind?: Maybe<Scalars['String']>;
  spec?: Maybe<Scalars['JSON']>;
}

export interface Md_ResourceTask {
  __typename?: 'MD_ResourceTask';
  id: Scalars['String'];
  name: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  running?: Maybe<Scalars['Boolean']>;
  summary?: Maybe<Md_ExecutionSummary>;
}

export interface Md_RestartConstraintEvaluationPayload {
  application: Scalars['String'];
  environment: Scalars['String'];
  type: Scalars['String'];
  reference: Scalars['String'];
  version: Scalars['String'];
}

export interface Md_RetryArtifactActionPayload {
  application: Scalars['String'];
  environment: Scalars['String'];
  reference: Scalars['String'];
  version: Scalars['String'];
  actionId: Scalars['String'];
  actionType: Md_ActionType;
}

export interface Md_RollbackToVersionPayload {
  application: Scalars['String'];
  environment: Scalars['String'];
  reference: Scalars['String'];
  comment: Scalars['String'];
  toVersion: Scalars['String'];
  fromVersion: Scalars['String'];
}

export type Md_RolloutTargetStatus = 'NOT_STARTED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED';

export interface Md_StageDetail {
  __typename?: 'MD_StageDetail';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['InstantTime']>;
  endTime?: Maybe<Scalars['InstantTime']>;
  status?: Maybe<Md_RolloutTargetStatus>;
  refId?: Maybe<Scalars['String']>;
  requisiteStageRefIds?: Maybe<Array<Scalars['String']>>;
}

export interface Md_ToggleResourceManagementPayload {
  id: Scalars['ID'];
  isPaused: Scalars['Boolean'];
  comment?: Maybe<Scalars['String']>;
}

export interface Md_UnpinArtifactVersionPayload {
  application: Scalars['String'];
  environment: Scalars['String'];
  reference: Scalars['String'];
}

export interface Md_UpdateGitIntegrationPayload {
  application: Scalars['String'];
  isEnabled?: Maybe<Scalars['Boolean']>;
  manifestPath?: Maybe<Scalars['String']>;
}

export interface Md_UserGeneratedConfig {
  __typename?: 'MD_UserGeneratedConfig';
  id: Scalars['ID'];
  deliveryConfig: Scalars['JSON'];
  updatedAt?: Maybe<Scalars['InstantTime']>;
  updatedBy?: Maybe<Scalars['String']>;
}

export interface Md_UserPermissions {
  __typename?: 'MD_UserPermissions';
  id: Scalars['ID'];
  writeAccess?: Maybe<Scalars['Boolean']>;
  error?: Maybe<Scalars['String']>;
}

export interface Md_ValidateResult {
  __typename?: 'MD_ValidateResult';
  success: Scalars['Boolean'];
  errors?: Maybe<Array<Scalars['String']>>;
}

export interface Md_VersionVeto {
  __typename?: 'MD_VersionVeto';
  vetoedBy?: Maybe<Scalars['String']>;
  vetoedAt?: Maybe<Scalars['InstantTime']>;
  comment?: Maybe<Scalars['String']>;
}

export interface Md_Warning {
  __typename?: 'MD_Warning';
  id: Scalars['ID'];
  type: Md_Warning_Type;
  message?: Maybe<Scalars['String']>;
}

export type Md_Warning_Type = 'TAG_TO_RELEASE_ARTIFACT';

export interface Mutation {
  __typename?: 'Mutation';
  md_updateConstraintStatus?: Maybe<Scalars['Boolean']>;
  md_restartConstraintEvaluation?: Maybe<Scalars['Boolean']>;
  md_toggleManagement?: Maybe<Scalars['Boolean']>;
  md_pauseManagement?: Maybe<Scalars['Boolean']>;
  md_resumeManagement?: Maybe<Scalars['Boolean']>;
  md_pinArtifactVersion?: Maybe<Scalars['Boolean']>;
  md_markArtifactVersionAsBad?: Maybe<Scalars['Boolean']>;
  md_unpinArtifactVersion?: Maybe<Scalars['Boolean']>;
  md_markArtifactVersionAsGood?: Maybe<Scalars['Boolean']>;
  md_retryArtifactVersionAction?: Maybe<Md_Action>;
  md_dismissNotification?: Maybe<Scalars['Boolean']>;
  md_updateGitIntegration?: Maybe<Md_GitIntegration>;
  md_toggleResourceManagement?: Maybe<Scalars['Boolean']>;
  md_importDeliveryConfig?: Maybe<Scalars['Boolean']>;
  md_rollbackToArtifactVersion?: Maybe<Scalars['Boolean']>;
  md_lockEnvironmentArtifact?: Maybe<Scalars['Boolean']>;
  md_redeployResource?: Maybe<Scalars['Boolean']>;
  md_deployResourceImmediately?: Maybe<Scalars['Boolean']>;
  md_initiateApplicationMigration?: Maybe<Md_Migration>;
  md_autoSaveMigrationConfig?: Maybe<Scalars['Boolean']>;
  md_migrationReportIssue?: Maybe<Scalars['Boolean']>;
  md_recheckResource?: Maybe<Scalars['Boolean']>;
  md_validateDeliveryConfig?: Maybe<Md_ValidateResult>;
  md_analyzePipelines?: Maybe<Md_Migration>;
}

export interface MutationMd_UpdateConstraintStatusArgs {
  payload: Md_ConstraintStatusPayload;
}

export interface MutationMd_RestartConstraintEvaluationArgs {
  payload: Md_RestartConstraintEvaluationPayload;
}

export interface MutationMd_ToggleManagementArgs {
  application: Scalars['ID'];
  isPaused: Scalars['Boolean'];
  comment?: Maybe<Scalars['String']>;
  cancelTasks?: Maybe<Scalars['Boolean']>;
}

export interface MutationMd_PauseManagementArgs {
  payload: Md_PausePayload;
}

export interface MutationMd_ResumeManagementArgs {
  application: Scalars['String'];
}

export interface MutationMd_PinArtifactVersionArgs {
  payload: Md_ArtifactVersionActionPayload;
}

export interface MutationMd_MarkArtifactVersionAsBadArgs {
  payload: Md_ArtifactVersionActionPayload;
}

export interface MutationMd_UnpinArtifactVersionArgs {
  payload: Md_UnpinArtifactVersionPayload;
}

export interface MutationMd_MarkArtifactVersionAsGoodArgs {
  payload: Md_MarkArtifactVersionAsGoodPayload;
}

export interface MutationMd_RetryArtifactVersionActionArgs {
  payload?: Maybe<Md_RetryArtifactActionPayload>;
}

export interface MutationMd_DismissNotificationArgs {
  payload: Md_DismissNotificationPayload;
}

export interface MutationMd_UpdateGitIntegrationArgs {
  payload: Md_UpdateGitIntegrationPayload;
}

export interface MutationMd_ToggleResourceManagementArgs {
  payload: Md_ToggleResourceManagementPayload;
}

export interface MutationMd_ImportDeliveryConfigArgs {
  application: Scalars['String'];
}

export interface MutationMd_RollbackToArtifactVersionArgs {
  payload: Md_RollbackToVersionPayload;
}

export interface MutationMd_LockEnvironmentArtifactArgs {
  payload: Md_ArtifactVersionActionPayload;
}

export interface MutationMd_RedeployResourceArgs {
  payload: Md_RedeployResourcePayload;
}

export interface MutationMd_DeployResourceImmediatelyArgs {
  payload: Md_DeployResourceImmediatelyPayload;
}

export interface MutationMd_InitiateApplicationMigrationArgs {
  payload: Md_InitiateApplicationMigrationPayload;
}

export interface MutationMd_AutoSaveMigrationConfigArgs {
  payload: Md_InitiateApplicationMigrationPayload;
}

export interface MutationMd_MigrationReportIssueArgs {
  payload: Md_MigrationReportIssuePayload;
}

export interface MutationMd_RecheckResourceArgs {
  payload: Md_RecheckResourcePayload;
}

export interface MutationMd_ValidateDeliveryConfigArgs {
  payload: Md_DeliveryConfigValidationPayload;
}

export interface MutationMd_AnalyzePipelinesArgs {
  application: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  md_application?: Maybe<Md_ApplicationResult>;
  md_migration?: Maybe<Md_Migration>;
  md_gitIntegration?: Maybe<Md_GitIntegration>;
  md_dryRun?: Maybe<Md_ActuationPlan>;
  md_jsonSchema?: Maybe<Md_JsonSchema>;
}

export interface QueryMd_ApplicationArgs {
  appName: Scalars['String'];
}

export interface QueryMd_MigrationArgs {
  appName: Scalars['String'];
}

export interface QueryMd_GitIntegrationArgs {
  appName: Scalars['String'];
}

export interface QueryMd_DryRunArgs {
  submittedDeliveryConfig: Scalars['String'];
}

export interface Spot_Service {
  __typename?: 'SPOT_Service';
  id: Scalars['ID'];
  managedDelivery?: Maybe<Md_ApplicationResult>;
}

export type ActionDetailsFragment = { __typename?: 'MD_Action' } & Pick<
  Md_Action,
  'id' | 'actionId' | 'actionType' | 'status' | 'startedAt' | 'completedAt' | 'link'
>;

export type DetailedVersionFieldsFragment = { __typename?: 'MD_ArtifactVersionInEnvironment' } & Pick<
  Md_ArtifactVersionInEnvironment,
  'id' | 'buildNumber' | 'version' | 'createdAt' | 'status' | 'isCurrent' | 'deployedAt'
> & {
    gitMetadata?: Maybe<
      { __typename?: 'MD_GitMetadata' } & Pick<Md_GitMetadata, 'commit' | 'author' | 'branch'> & {
          commitInfo?: Maybe<{ __typename?: 'MD_CommitInfo' } & Pick<Md_CommitInfo, 'sha' | 'link' | 'message'>>;
          pullRequest?: Maybe<{ __typename?: 'MD_PullRequest' } & Pick<Md_PullRequest, 'number' | 'link'>>;
          comparisonLinks?: Maybe<
            { __typename?: 'MD_ComparisonLinks' } & Pick<Md_ComparisonLinks, 'toPreviousVersion' | 'toCurrentVersion'>
          >;
        }
    >;
    lifecycleSteps?: Maybe<
      Array<
        { __typename?: 'MD_LifecycleStep' } & Pick<
          Md_LifecycleStep,
          'startedAt' | 'completedAt' | 'type' | 'status' | 'link'
        >
      >
    >;
    constraints?: Maybe<
      Array<
        { __typename?: 'MD_Constraint' } & Pick<
          Md_Constraint,
          'type' | 'status' | 'judgedBy' | 'judgedAt' | 'attributes'
        >
      >
    >;
    verifications?: Maybe<Array<{ __typename?: 'MD_Action' } & ActionDetailsFragment>>;
    postDeploy?: Maybe<Array<{ __typename?: 'MD_Action' } & ActionDetailsFragment>>;
    veto?: Maybe<{ __typename?: 'MD_VersionVeto' } & Pick<Md_VersionVeto, 'vetoedBy' | 'vetoedAt' | 'comment'>>;
  };

export type ArtifactPinnedVersionFieldsFragment = { __typename?: 'MD_Artifact' } & {
  pinnedVersion?: Maybe<
    { __typename?: 'MD_PinnedVersion' } & Pick<
      Md_PinnedVersion,
      'id' | 'version' | 'buildNumber' | 'pinnedAt' | 'pinnedBy' | 'comment'
    > & {
        gitMetadata?: Maybe<
          { __typename?: 'MD_GitMetadata' } & {
            commitInfo?: Maybe<{ __typename?: 'MD_CommitInfo' } & Pick<Md_CommitInfo, 'message'>>;
          }
        >;
      }
  >;
};

export type BaseEnvironmentFieldsFragment = { __typename?: 'MD_Environment' } & Pick<
  Md_Environment,
  'id' | 'name' | 'isPreview' | 'basedOn'
> & {
    gitMetadata?: Maybe<
      { __typename?: 'MD_GitMetadata' } & Pick<Md_GitMetadata, 'branch'> & {
          pullRequest?: Maybe<{ __typename?: 'MD_PullRequest' } & Pick<Md_PullRequest, 'link'>>;
        }
    >;
  };

export type BaesResourceFieldsFragment = { __typename?: 'MD_Resource' } & Pick<
  Md_Resource,
  'id' | 'kind' | 'displayName' | 'rawDefinition'
> & {
    moniker?: Maybe<{ __typename?: 'MD_Moniker' } & Pick<Md_Moniker, 'app' | 'stack' | 'detail'>>;
    location?: Maybe<{ __typename?: 'MD_Location' } & Pick<Md_Location, 'account' | 'regions'>>;
  };

export type FetchApplicationQueryVariables = Exact<{
  appName: Scalars['String'];
  statuses?: Maybe<Array<Md_ArtifactStatusInEnvironment> | Md_ArtifactStatusInEnvironment>;
}>;

export type FetchApplicationQuery = { __typename?: 'Query' } & {
  application?: Maybe<
    | ({ __typename?: 'MD_Application' } & Pick<Md_Application, 'id' | 'name'> & {
          config?: Maybe<{ __typename?: 'MD_Config' } & Pick<Md_Config, 'id' | 'previewEnvironmentsConfigured'>>;
          environments: Array<
            { __typename?: 'MD_Environment' } & Pick<Md_Environment, 'isDeleting'> & {
                state: { __typename?: 'MD_EnvironmentState' } & Pick<Md_EnvironmentState, 'id'> & {
                    artifacts?: Maybe<
                      Array<
                        { __typename?: 'MD_Artifact' } & Pick<
                          Md_Artifact,
                          'id' | 'name' | 'environment' | 'type' | 'reference'
                        > & {
                            versions?: Maybe<
                              Array<{ __typename?: 'MD_ArtifactVersionInEnvironment' } & DetailedVersionFieldsFragment>
                            >;
                            resources?: Maybe<Array<{ __typename?: 'MD_Resource' } & BaesResourceFieldsFragment>>;
                          } & ArtifactPinnedVersionFieldsFragment
                      >
                    >;
                    resources?: Maybe<Array<{ __typename?: 'MD_Resource' } & BaesResourceFieldsFragment>>;
                  };
              } & BaseEnvironmentFieldsFragment
          >;
        })
    | ({ __typename?: 'MD_Error' } & Pick<Md_Error, 'message'>)
  >;
};

export type FetchCurrentVersionQueryVariables = Exact<{
  appName: Scalars['String'];
}>;

export type FetchCurrentVersionQuery = { __typename?: 'Query' } & {
  application?: Maybe<
    | ({ __typename?: 'MD_Application' } & Pick<Md_Application, 'id' | 'name'> & {
          environments: Array<
            { __typename?: 'MD_Environment' } & Pick<Md_Environment, 'id' | 'name'> & {
                state: { __typename?: 'MD_EnvironmentState' } & {
                  artifacts?: Maybe<
                    Array<
                      { __typename?: 'MD_Artifact' } & Pick<
                        Md_Artifact,
                        'id' | 'name' | 'reference' | 'environment'
                      > & {
                          versions?: Maybe<
                            Array<
                              { __typename?: 'MD_ArtifactVersionInEnvironment' } & Pick<
                                Md_ArtifactVersionInEnvironment,
                                'id' | 'version' | 'buildNumber' | 'createdAt'
                              > & {
                                  gitMetadata?: Maybe<
                                    { __typename?: 'MD_GitMetadata' } & Pick<Md_GitMetadata, 'commit'> & {
                                        commitInfo?: Maybe<
                                          { __typename?: 'MD_CommitInfo' } & Pick<Md_CommitInfo, 'sha' | 'message'>
                                        >;
                                      }
                                  >;
                                }
                            >
                          >;
                        }
                    >
                  >;
                };
              }
          >;
        })
    | ({ __typename?: 'MD_Error' } & Pick<Md_Error, 'message'>)
  >;
};

export type FetchVersionsHistoryQueryVariables = Exact<{
  appName: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
}>;

export type FetchVersionsHistoryQuery = { __typename?: 'Query' } & {
  application?: Maybe<
    | ({ __typename?: 'MD_Application' } & Pick<Md_Application, 'id' | 'name'> & {
          environments: Array<
            { __typename?: 'MD_Environment' } & {
              state: { __typename?: 'MD_EnvironmentState' } & Pick<Md_EnvironmentState, 'id'> & {
                  artifacts?: Maybe<
                    Array<
                      { __typename?: 'MD_Artifact' } & Pick<
                        Md_Artifact,
                        'id' | 'name' | 'environment' | 'type' | 'reference'
                      > & {
                          versions?: Maybe<
                            Array<
                              { __typename?: 'MD_ArtifactVersionInEnvironment' } & Pick<
                                Md_ArtifactVersionInEnvironment,
                                'id' | 'buildNumber' | 'version' | 'createdAt' | 'status' | 'isCurrent'
                              > & {
                                  gitMetadata?: Maybe<
                                    { __typename?: 'MD_GitMetadata' } & Pick<
                                      Md_GitMetadata,
                                      'commit' | 'author' | 'branch'
                                    > & {
                                        commitInfo?: Maybe<
                                          { __typename?: 'MD_CommitInfo' } & Pick<
                                            Md_CommitInfo,
                                            'sha' | 'link' | 'message'
                                          >
                                        >;
                                        pullRequest?: Maybe<
                                          { __typename?: 'MD_PullRequest' } & Pick<Md_PullRequest, 'number' | 'link'>
                                        >;
                                      }
                                  >;
                                }
                            >
                          >;
                        } & ArtifactPinnedVersionFieldsFragment
                    >
                  >;
                };
            } & BaseEnvironmentFieldsFragment
          >;
        })
    | ({ __typename?: 'MD_Error' } & Pick<Md_Error, 'message'>)
  >;
};

export type FetchPinnedVersionsQueryVariables = Exact<{
  appName: Scalars['String'];
}>;

export type FetchPinnedVersionsQuery = { __typename?: 'Query' } & {
  application?: Maybe<
    | ({ __typename?: 'MD_Application' } & Pick<Md_Application, 'id' | 'name' | 'account'> & {
          environments: Array<
            { __typename?: 'MD_Environment' } & Pick<Md_Environment, 'id' | 'name'> & {
                state: { __typename?: 'MD_EnvironmentState' } & Pick<Md_EnvironmentState, 'id'> & {
                    artifacts?: Maybe<
                      Array<
                        { __typename?: 'MD_Artifact' } & Pick<
                          Md_Artifact,
                          'id' | 'name' | 'environment' | 'type' | 'reference'
                        > &
                          ArtifactPinnedVersionFieldsFragment
                      >
                    >;
                  };
              }
          >;
        })
    | ({ __typename?: 'MD_Error' } & Pick<Md_Error, 'message'>)
  >;
};

export type FetchVersionQueryVariables = Exact<{
  appName: Scalars['String'];
  versions?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;

export type FetchVersionQuery = { __typename?: 'Query' } & {
  application?: Maybe<
    | ({ __typename?: 'MD_Application' } & Pick<Md_Application, 'id' | 'name' | 'account'> & {
          environments: Array<
            { __typename?: 'MD_Environment' } & Pick<Md_Environment, 'id' | 'name'> & {
                state: { __typename?: 'MD_EnvironmentState' } & Pick<Md_EnvironmentState, 'id'> & {
                    artifacts?: Maybe<
                      Array<
                        { __typename?: 'MD_Artifact' } & Pick<
                          Md_Artifact,
                          'id' | 'name' | 'environment' | 'type' | 'reference'
                        > & {
                            versions?: Maybe<
                              Array<{ __typename?: 'MD_ArtifactVersionInEnvironment' } & DetailedVersionFieldsFragment>
                            >;
                          }
                      >
                    >;
                  };
              }
          >;
        })
    | ({ __typename?: 'MD_Error' } & Pick<Md_Error, 'message'>)
  >;
};

export type FetchResourceStatusQueryVariables = Exact<{
  appName: Scalars['String'];
}>;

export type FetchResourceStatusQuery = { __typename?: 'Query' } & {
  application?: Maybe<
    | ({ __typename?: 'MD_Application' } & Pick<Md_Application, 'id' | 'name'> & {
          environments: Array<
            { __typename?: 'MD_Environment' } & Pick<Md_Environment, 'id' | 'name'> & {
                state: { __typename?: 'MD_EnvironmentState' } & Pick<Md_EnvironmentState, 'id'> & {
                    resources?: Maybe<
                      Array<
                        { __typename?: 'MD_Resource' } & Pick<Md_Resource, 'id' | 'kind'> & {
                            state?: Maybe<
                              { __typename?: 'MD_ResourceActuationState' } & Pick<
                                Md_ResourceActuationState,
                                'status' | 'reason' | 'event'
                              > & {
                                  tasks?: Maybe<
                                    Array<{ __typename?: 'MD_ResourceTask' } & Pick<Md_ResourceTask, 'id' | 'name'>>
                                  >;
                                }
                            >;
                          }
                      >
                    >;
                  };
              }
          >;
        })
    | ({ __typename?: 'MD_Error' } & Pick<Md_Error, 'message'>)
  >;
};

export type FetchNotificationsQueryVariables = Exact<{
  appName: Scalars['String'];
}>;

export type FetchNotificationsQuery = { __typename?: 'Query' } & {
  application?: Maybe<
    | ({ __typename?: 'MD_Application' } & Pick<Md_Application, 'id' | 'name'> & {
          notifications?: Maybe<
            Array<
              { __typename?: 'MD_Notification' } & Pick<
                Md_Notification,
                'id' | 'level' | 'message' | 'triggeredAt' | 'link'
              >
            >
          >;
        })
    | ({ __typename?: 'MD_Error' } & Pick<Md_Error, 'message'>)
  >;
};

export type FetchApplicationManagementDataQueryVariables = Exact<{
  appName: Scalars['String'];
}>;

export type FetchApplicationManagementDataQuery = { __typename?: 'Query' } & {
  application?: Maybe<
    | ({ __typename?: 'MD_Application' } & Pick<Md_Application, 'id' | 'name' | 'isPaused'> & {
          config?: Maybe<
            { __typename?: 'MD_Config' } & Pick<Md_Config, 'id' | 'updatedAt' | 'rawConfig' | 'processedConfig'>
          >;
          gitIntegration?: Maybe<
            { __typename?: 'MD_GitIntegration' } & Pick<
              Md_GitIntegration,
              'id' | 'repository' | 'branch' | 'isEnabled' | 'link' | 'manifestPath'
            >
          >;
        })
    | ({ __typename?: 'MD_Error' } & Pick<Md_Error, 'message'>)
  >;
};

export type FetchApplicationManagementStatusQueryVariables = Exact<{
  appName: Scalars['String'];
}>;

export type FetchApplicationManagementStatusQuery = { __typename?: 'Query' } & {
  application?: Maybe<
    | ({ __typename?: 'MD_Application' } & Pick<Md_Application, 'id' | 'name' | 'isPaused'>)
    | ({ __typename?: 'MD_Error' } & Pick<Md_Error, 'message'>)
  >;
};

export type UpdateConstraintMutationVariables = Exact<{
  payload: Md_ConstraintStatusPayload;
}>;

export type UpdateConstraintMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'md_updateConstraintStatus'>;

export type ToggleManagementMutationVariables = Exact<{
  application: Scalars['ID'];
  isPaused: Scalars['Boolean'];
}>;

export type ToggleManagementMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'md_toggleManagement'>;

export type PinVersionMutationVariables = Exact<{
  payload: Md_ArtifactVersionActionPayload;
}>;

export type PinVersionMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'md_pinArtifactVersion'>;

export type UnpinVersionMutationVariables = Exact<{
  payload: Md_UnpinArtifactVersionPayload;
}>;

export type UnpinVersionMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'md_unpinArtifactVersion'>;

export type MarkVersionAsBadMutationVariables = Exact<{
  payload: Md_ArtifactVersionActionPayload;
}>;

export type MarkVersionAsBadMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'md_markArtifactVersionAsBad'>;

export type MarkVersionAsGoodMutationVariables = Exact<{
  payload: Md_MarkArtifactVersionAsGoodPayload;
}>;

export type MarkVersionAsGoodMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'md_markArtifactVersionAsGood'>;

export type RetryVersionActionMutationVariables = Exact<{
  payload: Md_RetryArtifactActionPayload;
}>;

export type RetryVersionActionMutation = { __typename?: 'Mutation' } & {
  md_retryArtifactVersionAction?: Maybe<{ __typename?: 'MD_Action' } & ActionDetailsFragment>;
};

export type UpdateGitIntegrationMutationVariables = Exact<{
  payload: Md_UpdateGitIntegrationPayload;
}>;

export type UpdateGitIntegrationMutation = { __typename?: 'Mutation' } & {
  md_updateGitIntegration?: Maybe<{ __typename?: 'MD_GitIntegration' } & Pick<Md_GitIntegration, 'id' | 'isEnabled'>>;
};

export type DismissNotificationMutationVariables = Exact<{
  payload: Md_DismissNotificationPayload;
}>;

export type DismissNotificationMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'md_dismissNotification'>;

export type ImportDeliveryConfigMutationVariables = Exact<{
  application: Scalars['String'];
}>;

export type ImportDeliveryConfigMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'md_importDeliveryConfig'>;

export type ToggleResourceManagementMutationVariables = Exact<{
  payload: Md_ToggleResourceManagementPayload;
}>;

export type ToggleResourceManagementMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'md_toggleResourceManagement'
>;

export type RestartConstraintEvaluationMutationVariables = Exact<{
  payload: Md_RestartConstraintEvaluationPayload;
}>;

export type RestartConstraintEvaluationMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'md_restartConstraintEvaluation'
>;

export const ActionDetailsFragmentDoc = gql`
  fragment actionDetails on MD_Action {
    id
    actionId
    actionType
    status
    startedAt
    completedAt
    link
  }
`;
export const DetailedVersionFieldsFragmentDoc = gql`
  fragment detailedVersionFields on MD_ArtifactVersionInEnvironment {
    id
    buildNumber
    version
    createdAt
    status
    isCurrent
    gitMetadata {
      commit
      author
      branch
      commitInfo {
        sha
        link
        message
      }
      pullRequest {
        number
        link
      }
      comparisonLinks {
        toPreviousVersion
        toCurrentVersion
      }
    }
    deployedAt
    lifecycleSteps {
      startedAt
      completedAt
      type
      status
      link
    }
    constraints {
      type
      status
      judgedBy
      judgedAt
      attributes
    }
    verifications {
      ...actionDetails
    }
    postDeploy {
      ...actionDetails
    }
    veto {
      vetoedBy
      vetoedAt
      comment
    }
  }
  ${ActionDetailsFragmentDoc}
`;
export const ArtifactPinnedVersionFieldsFragmentDoc = gql`
  fragment artifactPinnedVersionFields on MD_Artifact {
    pinnedVersion {
      id
      version
      buildNumber
      pinnedAt
      pinnedBy
      comment
      gitMetadata {
        commitInfo {
          message
        }
      }
    }
  }
`;
export const BaseEnvironmentFieldsFragmentDoc = gql`
  fragment baseEnvironmentFields on MD_Environment {
    id
    name
    isPreview
    gitMetadata {
      branch
      pullRequest {
        link
      }
    }
    basedOn
  }
`;
export const BaesResourceFieldsFragmentDoc = gql`
  fragment baesResourceFields on MD_Resource {
    id
    kind
    displayName
    moniker {
      app
      stack
      detail
    }
    location {
      account
      regions
    }
    rawDefinition
  }
`;
export const FetchApplicationDocument = gql`
  query fetchApplication($appName: String!, $statuses: [MD_ArtifactStatusInEnvironment!]) {
    application: md_application(appName: $appName) {
      ... on MD_Application {
        id
        name
        config {
          id
          previewEnvironmentsConfigured
        }
        environments {
          ...baseEnvironmentFields
          isDeleting
          state {
            id
            artifacts {
              id
              name
              environment
              type
              reference
              versions(statuses: $statuses) {
                ...detailedVersionFields
              }
              ...artifactPinnedVersionFields
              resources {
                ...baesResourceFields
              }
            }
            resources {
              ...baesResourceFields
            }
          }
        }
      }
      ... on MD_Error {
        message
      }
    }
  }
  ${BaseEnvironmentFieldsFragmentDoc}
  ${DetailedVersionFieldsFragmentDoc}
  ${ArtifactPinnedVersionFieldsFragmentDoc}
  ${BaesResourceFieldsFragmentDoc}
`;

/**
 * __useFetchApplicationQuery__
 *
 * To run a query within a React component, call `useFetchApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchApplicationQuery({
 *   variables: {
 *      appName: // value for 'appName'
 *      statuses: // value for 'statuses'
 *   },
 * });
 */
export function useFetchApplicationQuery(
  baseOptions: Apollo.QueryHookOptions<FetchApplicationQuery, FetchApplicationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchApplicationQuery, FetchApplicationQueryVariables>(FetchApplicationDocument, options);
}
export function useFetchApplicationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FetchApplicationQuery, FetchApplicationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchApplicationQuery, FetchApplicationQueryVariables>(FetchApplicationDocument, options);
}
export type FetchApplicationQueryHookResult = ReturnType<typeof useFetchApplicationQuery>;
export type FetchApplicationLazyQueryHookResult = ReturnType<typeof useFetchApplicationLazyQuery>;
export type FetchApplicationQueryResult = Apollo.QueryResult<FetchApplicationQuery, FetchApplicationQueryVariables>;
export const FetchCurrentVersionDocument = gql`
  query fetchCurrentVersion($appName: String!) {
    application: md_application(appName: $appName) {
      ... on MD_Application {
        id
        name
        environments {
          id
          name
          state {
            artifacts {
              id
              name
              reference
              environment
              versions(statuses: [CURRENT]) {
                id
                version
                buildNumber
                createdAt
                gitMetadata {
                  commit
                  commitInfo {
                    sha
                    message
                  }
                }
              }
            }
          }
        }
      }
      ... on MD_Error {
        message
      }
    }
  }
`;

/**
 * __useFetchCurrentVersionQuery__
 *
 * To run a query within a React component, call `useFetchCurrentVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchCurrentVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchCurrentVersionQuery({
 *   variables: {
 *      appName: // value for 'appName'
 *   },
 * });
 */
export function useFetchCurrentVersionQuery(
  baseOptions: Apollo.QueryHookOptions<FetchCurrentVersionQuery, FetchCurrentVersionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchCurrentVersionQuery, FetchCurrentVersionQueryVariables>(
    FetchCurrentVersionDocument,
    options,
  );
}
export function useFetchCurrentVersionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FetchCurrentVersionQuery, FetchCurrentVersionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchCurrentVersionQuery, FetchCurrentVersionQueryVariables>(
    FetchCurrentVersionDocument,
    options,
  );
}
export type FetchCurrentVersionQueryHookResult = ReturnType<typeof useFetchCurrentVersionQuery>;
export type FetchCurrentVersionLazyQueryHookResult = ReturnType<typeof useFetchCurrentVersionLazyQuery>;
export type FetchCurrentVersionQueryResult = Apollo.QueryResult<
  FetchCurrentVersionQuery,
  FetchCurrentVersionQueryVariables
>;
export const FetchVersionsHistoryDocument = gql`
  query fetchVersionsHistory($appName: String!, $limit: Int) {
    application: md_application(appName: $appName) {
      ... on MD_Application {
        id
        name
        environments {
          ...baseEnvironmentFields
          state {
            id
            artifacts {
              id
              name
              environment
              type
              reference
              versions(limit: $limit) {
                id
                buildNumber
                version
                createdAt
                status
                isCurrent
                gitMetadata {
                  commit
                  author
                  branch
                  commitInfo {
                    sha
                    link
                    message
                  }
                  pullRequest {
                    number
                    link
                  }
                }
              }
              ...artifactPinnedVersionFields
            }
          }
        }
      }
      ... on MD_Error {
        message
      }
    }
  }
  ${BaseEnvironmentFieldsFragmentDoc}
  ${ArtifactPinnedVersionFieldsFragmentDoc}
`;

/**
 * __useFetchVersionsHistoryQuery__
 *
 * To run a query within a React component, call `useFetchVersionsHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchVersionsHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchVersionsHistoryQuery({
 *   variables: {
 *      appName: // value for 'appName'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFetchVersionsHistoryQuery(
  baseOptions: Apollo.QueryHookOptions<FetchVersionsHistoryQuery, FetchVersionsHistoryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchVersionsHistoryQuery, FetchVersionsHistoryQueryVariables>(
    FetchVersionsHistoryDocument,
    options,
  );
}
export function useFetchVersionsHistoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FetchVersionsHistoryQuery, FetchVersionsHistoryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchVersionsHistoryQuery, FetchVersionsHistoryQueryVariables>(
    FetchVersionsHistoryDocument,
    options,
  );
}
export type FetchVersionsHistoryQueryHookResult = ReturnType<typeof useFetchVersionsHistoryQuery>;
export type FetchVersionsHistoryLazyQueryHookResult = ReturnType<typeof useFetchVersionsHistoryLazyQuery>;
export type FetchVersionsHistoryQueryResult = Apollo.QueryResult<
  FetchVersionsHistoryQuery,
  FetchVersionsHistoryQueryVariables
>;
export const FetchPinnedVersionsDocument = gql`
  query fetchPinnedVersions($appName: String!) {
    application: md_application(appName: $appName) {
      ... on MD_Application {
        id
        name
        account
        environments {
          id
          name
          state {
            id
            artifacts {
              id
              name
              environment
              type
              reference
              ...artifactPinnedVersionFields
            }
          }
        }
      }
      ... on MD_Error {
        message
      }
    }
  }
  ${ArtifactPinnedVersionFieldsFragmentDoc}
`;

/**
 * __useFetchPinnedVersionsQuery__
 *
 * To run a query within a React component, call `useFetchPinnedVersionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPinnedVersionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPinnedVersionsQuery({
 *   variables: {
 *      appName: // value for 'appName'
 *   },
 * });
 */
export function useFetchPinnedVersionsQuery(
  baseOptions: Apollo.QueryHookOptions<FetchPinnedVersionsQuery, FetchPinnedVersionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchPinnedVersionsQuery, FetchPinnedVersionsQueryVariables>(
    FetchPinnedVersionsDocument,
    options,
  );
}
export function useFetchPinnedVersionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FetchPinnedVersionsQuery, FetchPinnedVersionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchPinnedVersionsQuery, FetchPinnedVersionsQueryVariables>(
    FetchPinnedVersionsDocument,
    options,
  );
}
export type FetchPinnedVersionsQueryHookResult = ReturnType<typeof useFetchPinnedVersionsQuery>;
export type FetchPinnedVersionsLazyQueryHookResult = ReturnType<typeof useFetchPinnedVersionsLazyQuery>;
export type FetchPinnedVersionsQueryResult = Apollo.QueryResult<
  FetchPinnedVersionsQuery,
  FetchPinnedVersionsQueryVariables
>;
export const FetchVersionDocument = gql`
  query fetchVersion($appName: String!, $versions: [String!]) {
    application: md_application(appName: $appName) {
      ... on MD_Application {
        id
        name
        account
        environments {
          id
          name
          state {
            id
            artifacts {
              id
              name
              environment
              type
              reference
              versions(versions: $versions) {
                ...detailedVersionFields
              }
            }
          }
        }
      }
      ... on MD_Error {
        message
      }
    }
  }
  ${DetailedVersionFieldsFragmentDoc}
`;

/**
 * __useFetchVersionQuery__
 *
 * To run a query within a React component, call `useFetchVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchVersionQuery({
 *   variables: {
 *      appName: // value for 'appName'
 *      versions: // value for 'versions'
 *   },
 * });
 */
export function useFetchVersionQuery(
  baseOptions: Apollo.QueryHookOptions<FetchVersionQuery, FetchVersionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchVersionQuery, FetchVersionQueryVariables>(FetchVersionDocument, options);
}
export function useFetchVersionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FetchVersionQuery, FetchVersionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchVersionQuery, FetchVersionQueryVariables>(FetchVersionDocument, options);
}
export type FetchVersionQueryHookResult = ReturnType<typeof useFetchVersionQuery>;
export type FetchVersionLazyQueryHookResult = ReturnType<typeof useFetchVersionLazyQuery>;
export type FetchVersionQueryResult = Apollo.QueryResult<FetchVersionQuery, FetchVersionQueryVariables>;
export const FetchResourceStatusDocument = gql`
  query fetchResourceStatus($appName: String!) {
    application: md_application(appName: $appName) {
      ... on MD_Application {
        id
        name
        environments {
          id
          name
          state {
            id
            resources {
              id
              kind
              state {
                status
                reason
                event
                tasks {
                  id
                  name
                }
              }
            }
          }
        }
      }
      ... on MD_Error {
        message
      }
    }
  }
`;

/**
 * __useFetchResourceStatusQuery__
 *
 * To run a query within a React component, call `useFetchResourceStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchResourceStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchResourceStatusQuery({
 *   variables: {
 *      appName: // value for 'appName'
 *   },
 * });
 */
export function useFetchResourceStatusQuery(
  baseOptions: Apollo.QueryHookOptions<FetchResourceStatusQuery, FetchResourceStatusQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchResourceStatusQuery, FetchResourceStatusQueryVariables>(
    FetchResourceStatusDocument,
    options,
  );
}
export function useFetchResourceStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FetchResourceStatusQuery, FetchResourceStatusQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchResourceStatusQuery, FetchResourceStatusQueryVariables>(
    FetchResourceStatusDocument,
    options,
  );
}
export type FetchResourceStatusQueryHookResult = ReturnType<typeof useFetchResourceStatusQuery>;
export type FetchResourceStatusLazyQueryHookResult = ReturnType<typeof useFetchResourceStatusLazyQuery>;
export type FetchResourceStatusQueryResult = Apollo.QueryResult<
  FetchResourceStatusQuery,
  FetchResourceStatusQueryVariables
>;
export const FetchNotificationsDocument = gql`
  query fetchNotifications($appName: String!) {
    application: md_application(appName: $appName) {
      ... on MD_Application {
        id
        name
        notifications {
          id
          level
          message
          triggeredAt
          link
          id
        }
      }
      ... on MD_Error {
        message
      }
    }
  }
`;

/**
 * __useFetchNotificationsQuery__
 *
 * To run a query within a React component, call `useFetchNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchNotificationsQuery({
 *   variables: {
 *      appName: // value for 'appName'
 *   },
 * });
 */
export function useFetchNotificationsQuery(
  baseOptions: Apollo.QueryHookOptions<FetchNotificationsQuery, FetchNotificationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchNotificationsQuery, FetchNotificationsQueryVariables>(
    FetchNotificationsDocument,
    options,
  );
}
export function useFetchNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FetchNotificationsQuery, FetchNotificationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchNotificationsQuery, FetchNotificationsQueryVariables>(
    FetchNotificationsDocument,
    options,
  );
}
export type FetchNotificationsQueryHookResult = ReturnType<typeof useFetchNotificationsQuery>;
export type FetchNotificationsLazyQueryHookResult = ReturnType<typeof useFetchNotificationsLazyQuery>;
export type FetchNotificationsQueryResult = Apollo.QueryResult<
  FetchNotificationsQuery,
  FetchNotificationsQueryVariables
>;
export const FetchApplicationManagementDataDocument = gql`
  query fetchApplicationManagementData($appName: String!) {
    application: md_application(appName: $appName) {
      ... on MD_Application {
        id
        name
        isPaused
        config {
          id
          updatedAt
          rawConfig
          processedConfig
        }
        gitIntegration {
          id
          repository
          branch
          isEnabled
          link
          manifestPath
        }
      }
      ... on MD_Error {
        message
      }
    }
  }
`;

/**
 * __useFetchApplicationManagementDataQuery__
 *
 * To run a query within a React component, call `useFetchApplicationManagementDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchApplicationManagementDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchApplicationManagementDataQuery({
 *   variables: {
 *      appName: // value for 'appName'
 *   },
 * });
 */
export function useFetchApplicationManagementDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchApplicationManagementDataQuery,
    FetchApplicationManagementDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchApplicationManagementDataQuery, FetchApplicationManagementDataQueryVariables>(
    FetchApplicationManagementDataDocument,
    options,
  );
}
export function useFetchApplicationManagementDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchApplicationManagementDataQuery,
    FetchApplicationManagementDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchApplicationManagementDataQuery, FetchApplicationManagementDataQueryVariables>(
    FetchApplicationManagementDataDocument,
    options,
  );
}
export type FetchApplicationManagementDataQueryHookResult = ReturnType<typeof useFetchApplicationManagementDataQuery>;
export type FetchApplicationManagementDataLazyQueryHookResult = ReturnType<
  typeof useFetchApplicationManagementDataLazyQuery
>;
export type FetchApplicationManagementDataQueryResult = Apollo.QueryResult<
  FetchApplicationManagementDataQuery,
  FetchApplicationManagementDataQueryVariables
>;
export const FetchApplicationManagementStatusDocument = gql`
  query fetchApplicationManagementStatus($appName: String!) {
    application: md_application(appName: $appName) {
      ... on MD_Application {
        id
        name
        isPaused
      }
      ... on MD_Error {
        message
      }
    }
  }
`;

/**
 * __useFetchApplicationManagementStatusQuery__
 *
 * To run a query within a React component, call `useFetchApplicationManagementStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchApplicationManagementStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchApplicationManagementStatusQuery({
 *   variables: {
 *      appName: // value for 'appName'
 *   },
 * });
 */
export function useFetchApplicationManagementStatusQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchApplicationManagementStatusQuery,
    FetchApplicationManagementStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchApplicationManagementStatusQuery, FetchApplicationManagementStatusQueryVariables>(
    FetchApplicationManagementStatusDocument,
    options,
  );
}
export function useFetchApplicationManagementStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchApplicationManagementStatusQuery,
    FetchApplicationManagementStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchApplicationManagementStatusQuery, FetchApplicationManagementStatusQueryVariables>(
    FetchApplicationManagementStatusDocument,
    options,
  );
}
export type FetchApplicationManagementStatusQueryHookResult = ReturnType<
  typeof useFetchApplicationManagementStatusQuery
>;
export type FetchApplicationManagementStatusLazyQueryHookResult = ReturnType<
  typeof useFetchApplicationManagementStatusLazyQuery
>;
export type FetchApplicationManagementStatusQueryResult = Apollo.QueryResult<
  FetchApplicationManagementStatusQuery,
  FetchApplicationManagementStatusQueryVariables
>;
export const UpdateConstraintDocument = gql`
  mutation UpdateConstraint($payload: MD_ConstraintStatusPayload!) {
    md_updateConstraintStatus(payload: $payload)
  }
`;
export type UpdateConstraintMutationFn = Apollo.MutationFunction<
  UpdateConstraintMutation,
  UpdateConstraintMutationVariables
>;

/**
 * __useUpdateConstraintMutation__
 *
 * To run a mutation, you first call `useUpdateConstraintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConstraintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConstraintMutation, { data, loading, error }] = useUpdateConstraintMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdateConstraintMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateConstraintMutation, UpdateConstraintMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateConstraintMutation, UpdateConstraintMutationVariables>(
    UpdateConstraintDocument,
    options,
  );
}
export type UpdateConstraintMutationHookResult = ReturnType<typeof useUpdateConstraintMutation>;
export type UpdateConstraintMutationResult = Apollo.MutationResult<UpdateConstraintMutation>;
export type UpdateConstraintMutationOptions = Apollo.BaseMutationOptions<
  UpdateConstraintMutation,
  UpdateConstraintMutationVariables
>;
export const ToggleManagementDocument = gql`
  mutation ToggleManagement($application: ID!, $isPaused: Boolean!) {
    md_toggleManagement(application: $application, isPaused: $isPaused)
  }
`;
export type ToggleManagementMutationFn = Apollo.MutationFunction<
  ToggleManagementMutation,
  ToggleManagementMutationVariables
>;

/**
 * __useToggleManagementMutation__
 *
 * To run a mutation, you first call `useToggleManagementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleManagementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleManagementMutation, { data, loading, error }] = useToggleManagementMutation({
 *   variables: {
 *      application: // value for 'application'
 *      isPaused: // value for 'isPaused'
 *   },
 * });
 */
export function useToggleManagementMutation(
  baseOptions?: Apollo.MutationHookOptions<ToggleManagementMutation, ToggleManagementMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ToggleManagementMutation, ToggleManagementMutationVariables>(
    ToggleManagementDocument,
    options,
  );
}
export type ToggleManagementMutationHookResult = ReturnType<typeof useToggleManagementMutation>;
export type ToggleManagementMutationResult = Apollo.MutationResult<ToggleManagementMutation>;
export type ToggleManagementMutationOptions = Apollo.BaseMutationOptions<
  ToggleManagementMutation,
  ToggleManagementMutationVariables
>;
export const PinVersionDocument = gql`
  mutation PinVersion($payload: MD_ArtifactVersionActionPayload!) {
    md_pinArtifactVersion(payload: $payload)
  }
`;
export type PinVersionMutationFn = Apollo.MutationFunction<PinVersionMutation, PinVersionMutationVariables>;

/**
 * __usePinVersionMutation__
 *
 * To run a mutation, you first call `usePinVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePinVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pinVersionMutation, { data, loading, error }] = usePinVersionMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function usePinVersionMutation(
  baseOptions?: Apollo.MutationHookOptions<PinVersionMutation, PinVersionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PinVersionMutation, PinVersionMutationVariables>(PinVersionDocument, options);
}
export type PinVersionMutationHookResult = ReturnType<typeof usePinVersionMutation>;
export type PinVersionMutationResult = Apollo.MutationResult<PinVersionMutation>;
export type PinVersionMutationOptions = Apollo.BaseMutationOptions<PinVersionMutation, PinVersionMutationVariables>;
export const UnpinVersionDocument = gql`
  mutation UnpinVersion($payload: MD_UnpinArtifactVersionPayload!) {
    md_unpinArtifactVersion(payload: $payload)
  }
`;
export type UnpinVersionMutationFn = Apollo.MutationFunction<UnpinVersionMutation, UnpinVersionMutationVariables>;

/**
 * __useUnpinVersionMutation__
 *
 * To run a mutation, you first call `useUnpinVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnpinVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unpinVersionMutation, { data, loading, error }] = useUnpinVersionMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUnpinVersionMutation(
  baseOptions?: Apollo.MutationHookOptions<UnpinVersionMutation, UnpinVersionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UnpinVersionMutation, UnpinVersionMutationVariables>(UnpinVersionDocument, options);
}
export type UnpinVersionMutationHookResult = ReturnType<typeof useUnpinVersionMutation>;
export type UnpinVersionMutationResult = Apollo.MutationResult<UnpinVersionMutation>;
export type UnpinVersionMutationOptions = Apollo.BaseMutationOptions<
  UnpinVersionMutation,
  UnpinVersionMutationVariables
>;
export const MarkVersionAsBadDocument = gql`
  mutation MarkVersionAsBad($payload: MD_ArtifactVersionActionPayload!) {
    md_markArtifactVersionAsBad(payload: $payload)
  }
`;
export type MarkVersionAsBadMutationFn = Apollo.MutationFunction<
  MarkVersionAsBadMutation,
  MarkVersionAsBadMutationVariables
>;

/**
 * __useMarkVersionAsBadMutation__
 *
 * To run a mutation, you first call `useMarkVersionAsBadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkVersionAsBadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markVersionAsBadMutation, { data, loading, error }] = useMarkVersionAsBadMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useMarkVersionAsBadMutation(
  baseOptions?: Apollo.MutationHookOptions<MarkVersionAsBadMutation, MarkVersionAsBadMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<MarkVersionAsBadMutation, MarkVersionAsBadMutationVariables>(
    MarkVersionAsBadDocument,
    options,
  );
}
export type MarkVersionAsBadMutationHookResult = ReturnType<typeof useMarkVersionAsBadMutation>;
export type MarkVersionAsBadMutationResult = Apollo.MutationResult<MarkVersionAsBadMutation>;
export type MarkVersionAsBadMutationOptions = Apollo.BaseMutationOptions<
  MarkVersionAsBadMutation,
  MarkVersionAsBadMutationVariables
>;
export const MarkVersionAsGoodDocument = gql`
  mutation MarkVersionAsGood($payload: MD_MarkArtifactVersionAsGoodPayload!) {
    md_markArtifactVersionAsGood(payload: $payload)
  }
`;
export type MarkVersionAsGoodMutationFn = Apollo.MutationFunction<
  MarkVersionAsGoodMutation,
  MarkVersionAsGoodMutationVariables
>;

/**
 * __useMarkVersionAsGoodMutation__
 *
 * To run a mutation, you first call `useMarkVersionAsGoodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkVersionAsGoodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markVersionAsGoodMutation, { data, loading, error }] = useMarkVersionAsGoodMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useMarkVersionAsGoodMutation(
  baseOptions?: Apollo.MutationHookOptions<MarkVersionAsGoodMutation, MarkVersionAsGoodMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<MarkVersionAsGoodMutation, MarkVersionAsGoodMutationVariables>(
    MarkVersionAsGoodDocument,
    options,
  );
}
export type MarkVersionAsGoodMutationHookResult = ReturnType<typeof useMarkVersionAsGoodMutation>;
export type MarkVersionAsGoodMutationResult = Apollo.MutationResult<MarkVersionAsGoodMutation>;
export type MarkVersionAsGoodMutationOptions = Apollo.BaseMutationOptions<
  MarkVersionAsGoodMutation,
  MarkVersionAsGoodMutationVariables
>;
export const RetryVersionActionDocument = gql`
  mutation RetryVersionAction($payload: MD_RetryArtifactActionPayload!) {
    md_retryArtifactVersionAction(payload: $payload) {
      ...actionDetails
    }
  }
  ${ActionDetailsFragmentDoc}
`;
export type RetryVersionActionMutationFn = Apollo.MutationFunction<
  RetryVersionActionMutation,
  RetryVersionActionMutationVariables
>;

/**
 * __useRetryVersionActionMutation__
 *
 * To run a mutation, you first call `useRetryVersionActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRetryVersionActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [retryVersionActionMutation, { data, loading, error }] = useRetryVersionActionMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useRetryVersionActionMutation(
  baseOptions?: Apollo.MutationHookOptions<RetryVersionActionMutation, RetryVersionActionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RetryVersionActionMutation, RetryVersionActionMutationVariables>(
    RetryVersionActionDocument,
    options,
  );
}
export type RetryVersionActionMutationHookResult = ReturnType<typeof useRetryVersionActionMutation>;
export type RetryVersionActionMutationResult = Apollo.MutationResult<RetryVersionActionMutation>;
export type RetryVersionActionMutationOptions = Apollo.BaseMutationOptions<
  RetryVersionActionMutation,
  RetryVersionActionMutationVariables
>;
export const UpdateGitIntegrationDocument = gql`
  mutation UpdateGitIntegration($payload: MD_UpdateGitIntegrationPayload!) {
    md_updateGitIntegration(payload: $payload) {
      id
      isEnabled
    }
  }
`;
export type UpdateGitIntegrationMutationFn = Apollo.MutationFunction<
  UpdateGitIntegrationMutation,
  UpdateGitIntegrationMutationVariables
>;

/**
 * __useUpdateGitIntegrationMutation__
 *
 * To run a mutation, you first call `useUpdateGitIntegrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGitIntegrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGitIntegrationMutation, { data, loading, error }] = useUpdateGitIntegrationMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdateGitIntegrationMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateGitIntegrationMutation, UpdateGitIntegrationMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateGitIntegrationMutation, UpdateGitIntegrationMutationVariables>(
    UpdateGitIntegrationDocument,
    options,
  );
}
export type UpdateGitIntegrationMutationHookResult = ReturnType<typeof useUpdateGitIntegrationMutation>;
export type UpdateGitIntegrationMutationResult = Apollo.MutationResult<UpdateGitIntegrationMutation>;
export type UpdateGitIntegrationMutationOptions = Apollo.BaseMutationOptions<
  UpdateGitIntegrationMutation,
  UpdateGitIntegrationMutationVariables
>;
export const DismissNotificationDocument = gql`
  mutation DismissNotification($payload: MD_DismissNotificationPayload!) {
    md_dismissNotification(payload: $payload)
  }
`;
export type DismissNotificationMutationFn = Apollo.MutationFunction<
  DismissNotificationMutation,
  DismissNotificationMutationVariables
>;

/**
 * __useDismissNotificationMutation__
 *
 * To run a mutation, you first call `useDismissNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDismissNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dismissNotificationMutation, { data, loading, error }] = useDismissNotificationMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useDismissNotificationMutation(
  baseOptions?: Apollo.MutationHookOptions<DismissNotificationMutation, DismissNotificationMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DismissNotificationMutation, DismissNotificationMutationVariables>(
    DismissNotificationDocument,
    options,
  );
}
export type DismissNotificationMutationHookResult = ReturnType<typeof useDismissNotificationMutation>;
export type DismissNotificationMutationResult = Apollo.MutationResult<DismissNotificationMutation>;
export type DismissNotificationMutationOptions = Apollo.BaseMutationOptions<
  DismissNotificationMutation,
  DismissNotificationMutationVariables
>;
export const ImportDeliveryConfigDocument = gql`
  mutation ImportDeliveryConfig($application: String!) {
    md_importDeliveryConfig(application: $application)
  }
`;
export type ImportDeliveryConfigMutationFn = Apollo.MutationFunction<
  ImportDeliveryConfigMutation,
  ImportDeliveryConfigMutationVariables
>;

/**
 * __useImportDeliveryConfigMutation__
 *
 * To run a mutation, you first call `useImportDeliveryConfigMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportDeliveryConfigMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importDeliveryConfigMutation, { data, loading, error }] = useImportDeliveryConfigMutation({
 *   variables: {
 *      application: // value for 'application'
 *   },
 * });
 */
export function useImportDeliveryConfigMutation(
  baseOptions?: Apollo.MutationHookOptions<ImportDeliveryConfigMutation, ImportDeliveryConfigMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ImportDeliveryConfigMutation, ImportDeliveryConfigMutationVariables>(
    ImportDeliveryConfigDocument,
    options,
  );
}
export type ImportDeliveryConfigMutationHookResult = ReturnType<typeof useImportDeliveryConfigMutation>;
export type ImportDeliveryConfigMutationResult = Apollo.MutationResult<ImportDeliveryConfigMutation>;
export type ImportDeliveryConfigMutationOptions = Apollo.BaseMutationOptions<
  ImportDeliveryConfigMutation,
  ImportDeliveryConfigMutationVariables
>;
export const ToggleResourceManagementDocument = gql`
  mutation ToggleResourceManagement($payload: MD_ToggleResourceManagementPayload!) {
    md_toggleResourceManagement(payload: $payload)
  }
`;
export type ToggleResourceManagementMutationFn = Apollo.MutationFunction<
  ToggleResourceManagementMutation,
  ToggleResourceManagementMutationVariables
>;

/**
 * __useToggleResourceManagementMutation__
 *
 * To run a mutation, you first call `useToggleResourceManagementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleResourceManagementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleResourceManagementMutation, { data, loading, error }] = useToggleResourceManagementMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useToggleResourceManagementMutation(
  baseOptions?: Apollo.MutationHookOptions<ToggleResourceManagementMutation, ToggleResourceManagementMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ToggleResourceManagementMutation, ToggleResourceManagementMutationVariables>(
    ToggleResourceManagementDocument,
    options,
  );
}
export type ToggleResourceManagementMutationHookResult = ReturnType<typeof useToggleResourceManagementMutation>;
export type ToggleResourceManagementMutationResult = Apollo.MutationResult<ToggleResourceManagementMutation>;
export type ToggleResourceManagementMutationOptions = Apollo.BaseMutationOptions<
  ToggleResourceManagementMutation,
  ToggleResourceManagementMutationVariables
>;
export const RestartConstraintEvaluationDocument = gql`
  mutation RestartConstraintEvaluation($payload: MD_RestartConstraintEvaluationPayload!) {
    md_restartConstraintEvaluation(payload: $payload)
  }
`;
export type RestartConstraintEvaluationMutationFn = Apollo.MutationFunction<
  RestartConstraintEvaluationMutation,
  RestartConstraintEvaluationMutationVariables
>;

/**
 * __useRestartConstraintEvaluationMutation__
 *
 * To run a mutation, you first call `useRestartConstraintEvaluationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestartConstraintEvaluationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restartConstraintEvaluationMutation, { data, loading, error }] = useRestartConstraintEvaluationMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useRestartConstraintEvaluationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RestartConstraintEvaluationMutation,
    RestartConstraintEvaluationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RestartConstraintEvaluationMutation, RestartConstraintEvaluationMutationVariables>(
    RestartConstraintEvaluationDocument,
    options,
  );
}
export type RestartConstraintEvaluationMutationHookResult = ReturnType<typeof useRestartConstraintEvaluationMutation>;
export type RestartConstraintEvaluationMutationResult = Apollo.MutationResult<RestartConstraintEvaluationMutation>;
export type RestartConstraintEvaluationMutationOptions = Apollo.BaseMutationOptions<
  RestartConstraintEvaluationMutation,
  RestartConstraintEvaluationMutationVariables
>;
