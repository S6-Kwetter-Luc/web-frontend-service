import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import {userActions} from '../_actions';
import Particles from "react-particles-js";
import {particlesConfig} from "../particlesJsConfig";

class ReleaseNotes extends React.Component {
    render() {
        return (<>
                <div>
                    <Particles className="particles" params={particlesConfig}/>
                </div>
                <table id="issuetable" className="aui " border="1" cellPadding="3" cellSpacing="1" width="100%">
                    <thead>
                    <tr className="rowHeader">

                        <th className="colHeaderLink headerrow-issuetype" data-id="issuetype">
                            Issuetype
                        </th>

                        <th className="colHeaderLink headerrow-issuekey" data-id="issuekey">
                            Code
                        </th>

                        <th className="colHeaderLink headerrow-summary" data-id="summary">
                            Samenvatting
                        </th>

                        <th className="colHeaderLink headerrow-assignee" data-id="assignee">
                            Uitvoerder
                        </th>

                        <th className="colHeaderLink headerrow-reporter" data-id="reporter">
                            Melder
                        </th>

                        <th className="colHeaderLink headerrow-priority" data-id="priority">
                            Prioriteit
                        </th>

                        <th className="colHeaderLink headerrow-status" data-id="status">
                            Status
                        </th>

                        <th className="colHeaderLink headerrow-resolution" data-id="resolution">
                            Resolutie
                        </th>

                        <th className="colHeaderLink headerrow-created" data-id="created">
                            Aangemaakt
                        </th>

                        <th className="colHeaderLink headerrow-updated" data-id="updated">
                            Bijgewerkt
                        </th>

                        <th className="colHeaderLink headerrow-duedate" data-id="duedate">
                            Vervaldatum
                        </th>
                    </tr>
                    </thead>
                    <tbody>


                    <tr id="issuerow10253" rel="10253" data-issuekey="KL-12" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-12"
                               href="https://florisfeddema.atlassian.net/browse/KL-12">KL-12</a>
                        </td>
                        <td className="summary"><p>
                            Architectuur C1 bespreken
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Highest
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 12/mrt/20 1:30 PM</td>
                        <td className="updated"> 11/jun/20 10:25 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10257" rel="10257" data-issuekey="KL-16" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-16"
                               href="https://florisfeddema.atlassian.net/browse/KL-16">KL-16</a>
                        </td>
                        <td className="summary"><p>
                            Flutter tutorial doen
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> High
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 12/mrt/20 1:31 PM</td>
                        <td className="updated"> 11/jun/20 10:26 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10872" rel="10872" data-issuekey="KL-111" className="issuerow">
                        <td className="issuetype"> Taak
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-111"
                               href="https://florisfeddema.atlassian.net/browse/KL-111">KL-111</a>
                        </td>
                        <td className="summary"><p>
                            Resources aanpassen in alle backend services
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 20/jun/20 12:52 PM</td>
                        <td className="updated"> 20/jun/20 1:00 PM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10864" rel="10864" data-issuekey="KL-109" className="issuerow">
                        <td className="issuetype"> Taak
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-109"
                               href="https://florisfeddema.atlassian.net/browse/KL-109">KL-109</a>
                        </td>
                        <td className="summary"><p>
                            sonarcloud aan alle services toevoegen
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 19/jun/20 4:35 PM</td>
                        <td className="updated"> 20/jun/20 1:00 PM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10849" rel="10849" data-issuekey="KL-108" className="issuerow">
                        <td className="issuetype"> Taak
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-108"
                               href="https://florisfeddema.atlassian.net/browse/KL-108">KL-108</a>
                        </td>
                        <td className="summary"><p>
                            add k6 loadtesting
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 18/jun/20 5:02 PM</td>
                        <td className="updated"> 20/jun/20 1:00 PM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10848" rel="10848" data-issuekey="KL-107" className="issuerow">
                        <td className="issuetype"> Taak
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-107"
                               href="https://florisfeddema.atlassian.net/browse/KL-107">KL-107</a>
                        </td>
                        <td className="summary"><p>
                            add lighthouse to frontend
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 18/jun/20 4:40 PM</td>
                        <td className="updated"> 20/jun/20 1:00 PM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10847" rel="10847" data-issuekey="KL-106" className="issuerow">
                        <td className="issuetype"> Taak
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-106"
                               href="https://florisfeddema.atlassian.net/browse/KL-106">KL-106</a>
                        </td>
                        <td className="summary"><p>
                            enable github releases in workflow file
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 18/jun/20 4:40 PM</td>
                        <td className="updated"> 20/jun/20 1:00 PM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10845" rel="10845" data-issuekey="KL-105" className="issuerow">
                        <td className="issuetype"> Bug
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-105"
                               href="https://florisfeddema.atlassian.net/browse/KL-105">KL-105</a>
                        </td>
                        <td className="summary"><p>
                            fix healthchecks
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 18/jun/20 11:43 AM</td>
                        <td className="updated"> 20/jun/20 1:00 PM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10829" rel="10829" data-issuekey="KL-104" className="issuerow">
                        <td className="issuetype"> Taak
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-104"
                               href="https://florisfeddema.atlassian.net/browse/KL-104">KL-104</a>
                        </td>
                        <td className="summary"><p>
                            Health check toevoegen
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 17/jun/20 2:53 PM</td>
                        <td className="updated"> 20/jun/20 1:00 PM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10771" rel="10771" data-issuekey="KL-102" className="issuerow">
                        <td className="issuetype"> Taak
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-102"
                               href="https://florisfeddema.atlassian.net/browse/KL-102">KL-102</a>
                        </td>
                        <td className="summary"><p>
                            Restructured frontend folders
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 12/jun/20 1:15 AM</td>
                        <td className="updated"> 20/jun/20 1:00 PM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10769" rel="10769" data-issuekey="KL-101" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-101"
                               href="https://florisfeddema.atlassian.net/browse/KL-101">KL-101</a>
                        </td>
                        <td className="summary"><p>
                            Add TLS to services
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 11/jun/20 7:16 PM</td>
                        <td className="updated"> 19/jun/20 5:24 PM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10768" rel="10768" data-issuekey="KL-100" className="issuerow">
                        <td className="issuetype"> Taak
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-100"
                               href="https://florisfeddema.atlassian.net/browse/KL-100">KL-100</a>
                        </td>
                        <td className="summary"><p>
                            Sentry toevoegen aan backend en frontend service
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 11/jun/20 6:09 PM</td>
                        <td className="updated"> 19/jun/20 5:25 PM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10763" rel="10763" data-issuekey="KL-99" className="issuerow">
                        <td className="issuetype"> Taak
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-99"
                               href="https://florisfeddema.atlassian.net/browse/KL-99">KL-99</a>
                        </td>
                        <td className="summary"><p>
                            Implement sonarcloud
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 10/jun/20 10:17 AM</td>
                        <td className="updated"> 19/jun/20 5:25 PM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10738" rel="10738" data-issuekey="KL-98" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-98"
                               href="https://florisfeddema.atlassian.net/browse/KL-98">KL-98</a>
                        </td>
                        <td className="summary"><p>
                            Volgen profielen toevoegen
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 06/jun/20 8:49 PM</td>
                        <td className="updated"> 12/jun/20 1:15 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10671" rel="10671" data-issuekey="KL-97" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-97"
                               href="https://florisfeddema.atlassian.net/browse/KL-97">KL-97</a>
                        </td>
                        <td className="summary"><p>
                            Emailservice inrichten met rabbitmq
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 25/mei/20 4:31 PM</td>
                        <td className="updated"> 11/jun/20 10:21 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10659" rel="10659" data-issuekey="KL-96" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-96"
                               href="https://florisfeddema.atlassian.net/browse/KL-96">KL-96</a>
                        </td>
                        <td className="summary"><p>
                            MongoDB Atlas opzetten
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 22/mei/20 2:57 PM</td>
                        <td className="updated"> 11/jun/20 10:20 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10656" rel="10656" data-issuekey="KL-95" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-95"
                               href="https://florisfeddema.atlassian.net/browse/KL-95">KL-95</a>
                        </td>
                        <td className="summary"><p>
                            Kwets sturen implementeren in de kwet service
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 20/mei/20 3:56 PM</td>
                        <td className="updated"> 17/jun/20 2:54 PM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10655" rel="10655" data-issuekey="KL-94" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-94"
                               href="https://florisfeddema.atlassian.net/browse/KL-94">KL-94</a>
                        </td>
                        <td className="summary"><p>
                            Custom exceptions maken voor account-service
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 20/mei/20 10:30 AM</td>
                        <td className="updated"> 11/jun/20 10:21 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10650" rel="10650" data-issuekey="KL-93" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-93"
                               href="https://florisfeddema.atlassian.net/browse/KL-93">KL-93</a>
                        </td>
                        <td className="summary"><p>
                            Redux onderzoeken
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 17/mei/20 6:51 PM</td>
                        <td className="updated"> 11/jun/20 10:26 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10649" rel="10649" data-issuekey="KL-92" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-92"
                               href="https://florisfeddema.atlassian.net/browse/KL-92">KL-92</a>
                        </td>
                        <td className="summary"><p>
                            React onderzoeken
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 17/mei/20 6:51 PM</td>
                        <td className="updated"> 11/jun/20 10:26 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10569" rel="10569" data-issuekey="KL-87" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-87"
                               href="https://florisfeddema.atlassian.net/browse/KL-87">KL-87</a>
                        </td>
                        <td className="summary"><p>
                            Account service profiel functionaliteiten geven
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 23/apr/20 10:16 AM</td>
                        <td className="updated"> 11/jun/20 10:22 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10568" rel="10568" data-issuekey="KL-86" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-86"
                               href="https://florisfeddema.atlassian.net/browse/KL-86">KL-86</a>
                        </td>
                        <td className="summary"><p>
                            RabbitMQ opzetten
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 23/apr/20 10:16 AM</td>
                        <td className="updated"> 11/jun/20 10:22 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10567" rel="10567" data-issuekey="KL-85" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-85"
                               href="https://florisfeddema.atlassian.net/browse/KL-85">KL-85</a>
                        </td>
                        <td className="summary"><p>
                            ALS Gebruiker WIL IK kunnen inloggen ZODAT ik toegang heb tot de react app
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 23/apr/20 10:15 AM</td>
                        <td className="updated"> 11/jun/20 10:26 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10566" rel="10566" data-issuekey="KL-84" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-84"
                               href="https://florisfeddema.atlassian.net/browse/KL-84">KL-84</a>
                        </td>
                        <td className="summary"><p>
                            ALS Gebruiker WIL IK kunnen registreren in de react app ZODAT ik een account heb
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 23/apr/20 10:15 AM</td>
                        <td className="updated"> 11/jun/20 10:26 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10565" rel="10565" data-issuekey="KL-83" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-83"
                               href="https://florisfeddema.atlassian.net/browse/KL-83">KL-83</a>
                        </td>
                        <td className="summary"><p>
                            ALS Software Engineer WIL IK de react frontend + git + github actions opzetten ZODAT ik hier
                            later functionaliteiten aan kan toevoegen
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 23/apr/20 10:14 AM</td>
                        <td className="updated"> 11/jun/20 10:27 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10508" rel="10508" data-issuekey="KL-80" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-80"
                               href="https://florisfeddema.atlassian.net/browse/KL-80">KL-80</a>
                        </td>
                        <td className="summary"><p>
                            ALS gebruiker WIL IK kunnen registreren ZODAT ik een account heb
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 09/apr/20 11:36 PM</td>
                        <td className="updated"> 11/jun/20 10:25 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10465" rel="10465" data-issuekey="KL-61" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-61"
                               href="https://florisfeddema.atlassian.net/browse/KL-61">KL-61</a>
                        </td>
                        <td className="summary"><p>
                            ALS Software Engineer WIL IK bepalen welke technologieën gebruikt gaan worden voor de
                            Profile service ZODAT ik dit op een goede manier kan opzetten
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 01/apr/20 12:02 PM</td>
                        <td className="updated"> 11/jun/20 10:25 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10462" rel="10462" data-issuekey="KL-58" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-58"
                               href="https://florisfeddema.atlassian.net/browse/KL-58">KL-58</a>
                        </td>
                        <td className="summary"><p>
                            ALS Software Engineer WIL IK bepalen welke technologieën gebruikt gaan worden voor de Kwet
                            service ZODAT ik dit op een goede manier kan opzetten
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 01/apr/20 12:02 PM</td>
                        <td className="updated"> 11/jun/20 10:23 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10459" rel="10459" data-issuekey="KL-55" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-55"
                               href="https://florisfeddema.atlassian.net/browse/KL-55">KL-55</a>
                        </td>
                        <td className="summary"><p>
                            ALS Software Engineer WIL IK bepalen welke technologieën gebruikt gaan worden voor de
                            authenticatie &amp; autorisatie service ZODAT ik dit op een goede manier kan opzetten
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 01/apr/20 12:00 PM</td>
                        <td className="updated"> 11/jun/20 10:26 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10453" rel="10453" data-issuekey="KL-52" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-52"
                               href="https://florisfeddema.atlassian.net/browse/KL-52">KL-52</a>
                        </td>
                        <td className="summary"><p>
                            Keuze maken over CI/CD tool
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 01/apr/20 10:48 AM</td>
                        <td className="updated"> 11/jun/20 10:26 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10439" rel="10439" data-issuekey="KL-41" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-41"
                               href="https://florisfeddema.atlassian.net/browse/KL-41">KL-41</a>
                        </td>
                        <td className="summary"><p>
                            ALS Software Engineer WIL IK de Kwet Service opzetten ZODAT Ik hier later functionaliteiten
                            aan kan toevoegen
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 01/apr/20 10:36 AM</td>
                        <td className="updated"> 11/jun/20 10:21 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10435" rel="10435" data-issuekey="KL-38" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-38"
                               href="https://florisfeddema.atlassian.net/browse/KL-38">KL-38</a>
                        </td>
                        <td className="summary"><p>
                            ALS Software Engineer WIL IK de Authentication &amp; Authorization Service opzetten ZODAT Ik
                            hier later functionaliteiten aan kan toevoegen
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 01/apr/20 10:35 AM</td>
                        <td className="updated"> 11/jun/20 10:26 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10433" rel="10433" data-issuekey="KL-37" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-37"
                               href="https://florisfeddema.atlassian.net/browse/KL-37">KL-37</a>
                        </td>
                        <td className="summary"><p>
                            ALS Software Engineer WIL IK de Frontend Android Application opzetten ZODAT Ik hier later
                            functionaliteiten aan kan toevoegen
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Medium
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 01/apr/20 10:32 AM</td>
                        <td className="updated"> 11/jun/20 10:26 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>


                    <tr id="issuerow10258" rel="10258" data-issuekey="KL-17" className="issuerow">
                        <td className="issuetype"> Story
                        </td>
                        <td className="issuekey">

                            <a className="issue-link" data-issue-key="KL-17"
                               href="https://florisfeddema.atlassian.net/browse/KL-17">KL-17</a>
                        </td>
                        <td className="summary"><p>
                            Kubernetes &amp; Rancher onderzoeken/opzetten
                        </p>
                        </td>
                        <td className="assignee"> luc urlings
                        </td>
                        <td className="reporter"> luc urlings
                        </td>
                        <td className="priority"> Low
                        </td>
                        <td className="status">
                            <span
                                className=" jira-issue-status-lozenge aui-lozenge jira-issue-status-lozenge-green jira-issue-status-lozenge-done aui-lozenge-subtle jira-issue-status-lozenge-max-width-medium"
                                data-tooltip="&lt;span class=&quot;jira-issue-status-tooltip-title&quot;&gt;Gereed&lt;/span&gt;">Gereed</span>
                        </td>
                        <td className="resolution"> Gereed
                        </td>
                        <td className="created"> 12/mrt/20 1:31 PM</td>
                        <td className="updated"> 11/jun/20 10:22 AM</td>
                        <td className="duedate">    &nbsp;
                        </td>
                    </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

function mapState(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    return {user, users};
}

const actionCreators = {
    getUsers: userActions.getAll
}

const connectedReleaseNotes = connect(mapState, actionCreators)(ReleaseNotes);
export {connectedReleaseNotes as ReleaseNotes};