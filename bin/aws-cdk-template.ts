#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
//import { VpcStack } from '../lib/vpc-stack';
import { LambdaStack } from '../lib/lambda/lambda-stack';
import { StepFunctionsStack } from '../lib/stepfunctions-stack';


const app = new cdk.App();

const prj_name = 'AwsCdkTemplate';
const env = {
  account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION
}

/*
const vpc_stack = new VpcStack(app, prj_name+'-VpcStack', {
  prj_name: prj_name,
  env: env,
});
*/
const lambda_stack = new LambdaStack(app, prj_name+'-LambdaStack', {
  prj_name: prj_name,
  env: env,
});

const stepfunctions_stack = new StepFunctionsStack(app, prj_name+'-StepFunctionsStack', {
  prj_name: prj_name,
  env: env,
  lambda: lambda_stack.lambda,
});
